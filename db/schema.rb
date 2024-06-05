# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2024_05_30_173144) do

  create_table "articles", force: :cascade do |t|
    t.string "title"
    t.string "text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "company_id"
    t.string "url"
    t.string "thumbnail"
    t.string "author"
    t.datetime "date"
    t.string "blog_name"
    t.index ["company_id"], name: "index_articles_on_company_id"
  end

  create_table "companies", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "host"
    t.string "name"
  end

  create_table "post_comments", force: :cascade do |t|
    t.integer "post_id", null: false
    t.text "content"
    t.string "user_name"
    t.string "user_password"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["post_id"], name: "index_post_comments_on_post_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "user_name"
    t.string "user_password"
  end

  create_table "qna_answers", force: :cascade do |t|
    t.integer "qna_id"
    t.text "answer"
    t.string "user_name"
    t.string "user_password"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "qnas", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "user_name"
    t.string "user_password"
  end

  add_foreign_key "articles", "companies"
  add_foreign_key "post_comments", "posts"
  add_foreign_key "qna_answers", "qnas"
end
