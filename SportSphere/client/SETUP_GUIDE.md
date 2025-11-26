# Krida Kaushal - Sports Event Management Platform

## Setup Instructions

### 1. Database Setup
The database schema has been automatically configured with the following tables:
- `profiles` - User profiles (players and organizers)
- `events` - Sports events created by organizers
- `enrollments` - Player enrollments in events

### 2. Creating Test Accounts

To test the platform, create two accounts:

#### Player Account
1. Go to `/signup`
2. Fill in the form with:
   - Full Name: Your name
   - Email: player@test.com (or any email)
   - Password: password123
   - Role: Select "Player"
3. After signup, login with these credentials

#### Organizer Account
1. Go to `/signup`
2. Fill in the form with:
   - Full Name: Your name
   - Email: organizer@test.com (or any email)
   - Password: password123
   - Role: Select "Organizer"
3. After signup, login with these credentials

### 3. Using the Platform

#### As an Organizer:
1. Login with organizer credentials
2. You'll be redirected to `/admin/dashboard`
3. Click "Manage Events" or go to `/admin/events`
4. Click "Add Event" to create a new sports event
5. Fill in the event details (name, sport type, date, venue, etc.)
6. View enrollments at `/admin/enrollments`

#### As a Player:
1. Login with player credentials
2. Browse the home page at `/`
3. View all events at `/events`
4. Click on any event to see details
5. Click "Enroll Now" to join an event
6. View your enrolled events at `/profile`

### 4. Features

#### User/Player Panel:
- Home page with hero section and featured sports
- Events listing with search and filter
- Event details modal with enrollment
- Player profile with enrolled events and stats

#### Organizer/Admin Panel:
- Dashboard with overview statistics
- Event management (create, edit, delete)
- Enrollment management (view, approve, reject)
- Real-time enrollment tracking

### 5. Technology Stack
- React 18 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- api for backend and authentication
- Role-based access control

### 6. Color Palette
- Primary: Orange (#f97316, #ea580c)
- Background: Gray (#f9fafb, #374151)
- Success: Green
- Error: Red
- Info: Blue

Enjoy using Krida Kaushal!
