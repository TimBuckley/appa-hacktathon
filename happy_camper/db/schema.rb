# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160213221250) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "capstones", force: :cascade do |t|
    t.integer  "graduate_id", null: false
    t.string   "name",        null: false
    t.string   "website_url"
    t.string   "github_url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "capstones", ["graduate_id"], name: "index_capstones_on_graduate_id", using: :btree

  create_table "companies", force: :cascade do |t|
    t.string   "uuid",           null: false
    t.string   "name"
    t.string   "linkedin_url"
    t.string   "crunchbase_url"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "companies", ["uuid"], name: "index_companies_on_uuid", using: :btree

  create_table "github_data", force: :cascade do |t|
    t.integer  "graduate_id",          null: false
    t.string   "url"
    t.string   "username"
    t.integer  "number_of_repos"
    t.string   "personal_website_url"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  add_index "github_data", ["graduate_id"], name: "index_github_data_on_graduate_id", using: :btree

  create_table "graduates", force: :cascade do |t|
    t.string   "uuid",                                        null: false
    t.string   "full_name"
    t.string   "picture_url"
    t.string   "month_attended"
    t.integer  "year_attended"
    t.string   "bootcamp_name",     default: "App Academy"
    t.string   "bootcamp_location", default: "San Francisco"
    t.datetime "created_at",                                  null: false
    t.datetime "updated_at",                                  null: false
    t.string   "linkedin_url"
  end

  add_index "graduates", ["uuid"], name: "index_graduates_on_uuid", using: :btree

  create_table "work_histories", force: :cascade do |t|
    t.integer  "graduate_id", null: false
    t.integer  "company_id",  null: false
    t.boolean  "current"
    t.string   "month_hired"
    t.integer  "year_hired"
    t.string   "location"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "work_histories", ["company_id"], name: "index_work_histories_on_company_id", using: :btree
  add_index "work_histories", ["graduate_id"], name: "index_work_histories_on_graduate_id", using: :btree

end
