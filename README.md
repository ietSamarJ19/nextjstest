## Folder Structure 

iet-davv/
├── app/
│   ├── globals.css
│   ├── layout.tsx          # Root layout (header, footer, etc.)
│   ├── page.tsx            # Home page (/)
│   ├── loading.tsx         # Global loading UI
│   ├── not-found.tsx       # 404 page
│   │
│   ├── academics/
│   │   ├── page.tsx        # /academics
│   │   ├── loading.tsx     # Loading for academics section
│   │   ├── departments/
│   │   │   ├── page.tsx    # /academics/departments
│   │   │   └── [slug]/
│   │   │       └── page.tsx # /academics/departments/computer-science
│   │   ├── programs/
│   │   │   ├── page.tsx    # /academics/programs
│   │   │   ├── undergraduate/
│   │   │   │   └── page.tsx # /academics/programs/undergraduate
│   │   │   └── postgraduate/
│   │   │       └── page.tsx # /academics/programs/postgraduate
│   │   ├── faculty/
│   │   │   └── page.tsx    # /academics/faculty
│   │   └── curriculum/
│   │       └── page.tsx    # /academics/curriculum
│   │
│   ├── admission/
│   │   ├── page.tsx        # /admission
│   │   ├── requirements/
│   │   │   └── page.tsx    # /admission/requirements
│   │   ├── application/
│   │   │   └── page.tsx    # /admission/application
│   │   ├── fees/
│   │   │   └── page.tsx    # /admission/fees
│   │   ├── scholarships/
│   │   │   └── page.tsx    # /admission/scholarships
│   │   └── important-dates/
│   │       └── page.tsx    # /admission/important-dates
│   │
│   ├── people/
│   │   ├── page.tsx        # /people
│   │   ├── administration/
│   │   │   └── page.tsx    # /people/administration
│   │   ├── faculty/
│   │   │   ├── page.tsx    # /people/faculty
│   │   │   └── [id]/
│   │   │       └── page.tsx # /people/faculty/john-doe
│   │   ├── staff/
│   │   │   └── page.tsx    # /people/staff
│   │   └── alumni/
│   │       └── page.tsx    # /people/alumni
│   │
│   ├── activities/
│   │   ├── page.tsx        # /activities
│   │   ├── events/
│   │   │   ├── page.tsx    # /activities/events
│   │   │   └── [slug]/
│   │   │       └── page.tsx # /activities/events/annual-fest
│   │   ├── clubs/
│   │   │   ├── page.tsx    # /activities/clubs
│   │   │   └── [club]/
│   │   │       └── page.tsx # /activities/clubs/drama-club
│   │   ├── sports/
│   │   │   └── page.tsx    # /activities/sports
│   │   └── cultural/
│   │       └── page.tsx    # /activities/cultural
│   │
│   ├── examination/
│   │   ├── page.tsx        # /examination
│   │   ├── schedule/
│   │   │   └── page.tsx    # /examination/schedule
│   │   ├── results/
│   │   │   └── page.tsx    # /examination/results
│   │   ├── regulations/
│   │   │   └── page.tsx    # /examination/regulations
│   │   └── forms/
│   │       └── page.tsx    # /examination/forms
│   │
│   ├── tender/
│   │   ├── page.tsx        # /tender
│   │   ├── current/
│   │   │   └── page.tsx    # /tender/current
│   │   ├── archive/
│   │   │   └── page.tsx    # /tender/archive
│   │   └── [id]/
│   │       └── page.tsx    # /tender/123 (specific tender)
│   │
│   ├── reach-us/
│   │   ├── page.tsx        # /reach-us
│   │   ├── contact/
│   │   │   └── page.tsx    # /reach-us/contact
│   │   ├── location/
│   │   │   └── page.tsx    # /reach-us/location
│   │   └── feedback/
│   │       └── page.tsx    # /reach-us/feedback
│   │
│   └── api/                # API routes (if needed)
│       ├── contact/
│       │   └── route.ts    # POST /api/contact
│       └── feedback/
│           └── route.ts    # POST /api/feedback
│
├── components/
│   ├── ui/                 # shadcn components
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── AboutSection.tsx
│   │   └── NewsSection.tsx
│   └── forms/
│       ├── ContactForm.tsx
│       └── AdmissionForm.tsx
│
├── lib/
│   └── utils.ts           # shadcn utilities
│
└── public/
    ├── images/
    ├── documents/
    └── favicon.ico