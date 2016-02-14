class AAScraper

  def initialize(base_url)
    @agent = Mechanize.new
    @page = @agent.get(base_url)
  end

  def load_graduates
    cohort_pages.each do |cp|
      month, year, city = cohort_details(cp)
      cp.search('.student').each do |s|
        student_details = student_details(s)

        Graduate.create({
          full_name: student_details[:name],
          picture_url: student_details[:picture_url],
          month_attended: month,
          year_attended: year,
          bootcamp_location: city,
        })
      end
    end
  end

  private

  def cohort_pages
    @page.links.select { |l| l.text.match(/^\d{4}\s/)  }.map(&:click)
  end

  def cohort_details(cohort_page)
    cohort_page.search(".header-class").text.split[-3..-1]
  end

  def student_details(student)
    student_details = {}
    student_details[:name] = student.search(".student-content")[0].first_element_child.text
    student_details[:picture_url ]= student.search(".student-avatar").children[1]["src"]

    contact_links = student.search(".student-contact").search("a")
    contact_links.each { |cl| student_details[cl.child.text] = cl["href"] }

    student_details
  end
end

