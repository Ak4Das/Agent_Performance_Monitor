import styles from "../style_modules/page_modules/LeadManagement.module.css"
import React from "react"
import SideBar from "../components/SideBar.jsx"
import NavBar from "../components/NavBar.jsx"
import leadData from "../leadData.js"
import leadsData from "../leadData.js"
import { useParams } from "react-router-dom"

export default function LeadManagement() {
  const id = Number(useParams().id)
  const lead = leadsData.find((lead) => lead.id === id)

  return (
    <div className={`app`}>
      <SideBar />
      <main className={`content`}>
        <NavBar />
        <section className={`main_section`}>
          <div className={`${styles.heading_container}`}>
            <div className={`${styles.heading}`}>
              <h2 className={`${styles.text1}`}>Manage Lead</h2>
              <h5 className={`${styles.text2}`}>Lead Management Screen</h5>
            </div>
          </div>
          <div className={`container ${styles.container}`}>
            <div className={`${styles.leadDetailsContainer}`}>
              <h1>Lead Details</h1>
              <p>
                Name: <span>{lead.name}</span>
              </p>
              <p>
                Sales Agent: <span>{lead.salesAgent}</span>
              </p>
              <p>
                Source: <span>{lead.source}</span>
              </p>
              <p>
                Status: <span>{lead.status}</span>
              </p>
              <p>
                Priority: <span>{lead.priority}</span>
              </p>
              <p>
                Time To Close: <span>{lead.timeToClose} days</span>
              </p>
              <button className="btn btn-outline-success">
                Edit Lead Details
              </button>
            </div>
            <div className={`${styles.comment_section}`}>
              <h1>Comment Section</h1>
              <section className={`${styles.previous_comments_section}`}>
                <h3>Previous Comments</h3>
                <div className={`${styles.previous_comment}`}>
                  <div className={`${styles.comment}`}>
                    Lorem ipsum dolor sit amet.
                  </div>
                  <div className={`${styles.timeAndDate}`}>
                    #1 | 25-08-2026 | 1:00pm
                  </div>
                </div>
              </section>
              <section className={`${styles.add_comment_section}`}>
                <h3>Add New Comment</h3>
                <textarea name="comment_box" className={`${styles.comment_box}`} rows="5"></textarea>
                <button className="btn btn-success">Submit Comment</button>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
