// Students data
const students = [
  { name: "Fatima Ahmed Bahgat", code: "NO.A005" },
  { name: "Tabarak Shwkat Yasin", code: "NO.A004" },
  { name: "Sarah Amer Ali", code: "NO.A006" },
  { name: "Lana Jamal Nader", code: "NO.A003" },
  { name: "Amna Tamy Mtar", code: "NO.A002" },
  { name: "Shahad Qais Abbas", code: "NO.A001" },
  { name: "Zubaida Tahseen Ali", code: "NO.A007" },
  { name: "Hala Majed Hassan", code: "NO.A009" },
  { name: "Wissam Najm Abdullah", code: "NO.A008" },
  { name: "Mustafa Daoud Abbas", code: "NO.A012" },
  { name: "Eman Juad Qadr", code: "NO.A011" },
  { name: "Abdulrahman Abdulwahab Muhammad", code: "NO.A010" },
  { name: "Mohamed Erfan Nouri", code: "NO.A015" },
  { name: "Sara Jasim Mohammed", code: "NO.A014" },
  { name: "Duha Mohamed Hussien", code: "NO.A013" },
  { name: "Hilalah Nasraldeen Mohammed Ameen", code: "NO.A016" },
  { name: "Khatab Mohammed Fathel", code: "NO.A017" },
]

// Populate students grid
function populateStudents() {
  const studentsGrid = document.getElementById("studentsGrid")

  students.forEach((student, index) => {
    const studentCard = document.createElement("div")
    studentCard.className = "student-card"
    studentCard.style.animationDelay = `${index * 0.1}s`

    studentCard.innerHTML = `
            <div class="student-name">${student.name}</div>
            <div class="student-code">${student.code}</div>
        `

    studentsGrid.appendChild(studentCard)
  })
}

// Mobile menu toggle
function setupMobileMenu() {
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close menu when clicking on a link
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Intersection Observer for animations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  document.querySelectorAll(".course-card, .student-card, .instructor-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
}

// Header scroll effect
function setupHeaderScroll() {
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)"
      header.style.boxShadow = "0 2px 30px rgba(0, 0, 0, 0.15)"
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)"
      header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
    }
  })
}

// Initialize all functions when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  populateStudents()
  setupMobileMenu()
  setupSmoothScrolling()
  setupScrollAnimations()
  setupHeaderScroll()
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1"
})

// Initial body styling for loading effect
document.body.style.opacity = "0"
document.body.style.transition = "opacity 0.5s ease"
