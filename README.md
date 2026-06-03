Note: This repository is only for configuring the early-access webpage. Below is an abridged explanation of Aventir from internal product documentation.

URL: https://aventir.xyz

# Aventir

Aventir is a social travel journal for saving journeys, discovering new places, and keeping up with friends' travels.

Track a vacation, a quick day trip, or any adventure with minimal effort. Aventir maps your route, identifies where you've been, and turns the journey into a shareable memory automatically. Use Explore to find popular spots nearby, see where friends have been, and save and organize places to make planning easier. Stay connected with friends and family by interacting with posts in the feed, and relive your past journeys through posts and media.

## What to Test

Please try the core real-world loop:

- Track and save a real journey, such as a walk, errand, day trip, or vacation route.
- Review the detected places before saving, add photos where helpful, and rate places you liked or disliked.
- Explore spots in your area, especially popular nearby places and places friends have visited.
- Save places you want to visit and check that they appear in Plan.
- Follow friends or test accounts, then interact with posts in the feed through likes and comments.
- Open profiles, past journeys, notifications, and individual activity posts to make sure the social journal feels connected.

## Product Overview

Aventir has three connected jobs:

- Capture travel with low effort. Users can track a route automatically or log locations manually, then save the result as a post.
- Turn movement into a journal. Saved activities keep the route, duration, distance, visited places, photos, notes, and place ratings together.
- Make travel social. Users follow each other, see activity posts in the feed, react with likes and comments, receive notifications, and inspect friends' profiles and visited places.

The current app is organized around five main tabs:

- Home: A social feed of the user's own activities and activities from people they follow.
- Explore: A map-based discovery surface for popular nearby places, Google Places results, friend context, and quick save actions.
- Track: Route capture with multiple tracking modes, including manual location logging.
- Plan: Saved places the user wants to visit or has marked, organized from their spot marks.
- Profile: User identity, stats, followers/following, and a personal activity journal.

## Key Features

### Journey Tracking

- Tracks location in the foreground and background through Expo Location.
- Supports tracking modes for manual, conservative, balanced, detail, and continuous capture.
- Stores route points, start/end timestamps, calculated distance, duration, center point, and starting city/country.
- Provides manual tracking for users who prefer to tap and log places without continuous GPS.
- Sends completed tracking sessions into a save flow instead of posting raw route data immediately.

### Automatic Journey Memory Creation

- Detects likely stay points from a tracked route.
- Resolves visited places against Google Places.
- Generates a save preview with the route, map markers, detected places, title, notes, and per-place controls.
- Lets users attach place photos before saving.
- Uploads activity photos to Supabase Storage and patches them back into the saved activity.
- Saves completed journeys as activity posts in the social feed.

### Feed and Social Interaction

- Shows activity posts from the current user and followed users.
- Renders route maps, visited places, place photos, title, notes, duration, and social counters.
- Supports liking and unliking activities.
- Supports comments on activity detail screens.
- Shows friend-like avatar stacks when followed users have liked a post.
- Keeps pending saves visible in the feed while background upload/persistence finishes.

### Explore and Discovery

- Requests the user's current location and fetches popular nearby spots.
- Combines in-app popularity data with Google Places fallback results.
- Uses an app-side popularity function for places with positive Aventir ratings.
- Uses Wikidata images for Explore marker photos when available.
- Shows friend context for spots friends have visited.
- Lets users save a place to their want-to-go list.
- Opens spot detail screens for richer place information.

### Planning and Saved Places

- Uses marks to represent a user's relationship to a spot.
- Supports `been` and `want_to_go` states.
- Supports liked/disliked ratings for visited places.
- Shows saved spots in Plan.
- Keeps cached place metadata from Google Places in the `spots` table for fast revisit and aggregation.

### Profiles, Follows, and Notifications

- Authenticated users create profiles through onboarding.
- Profiles include username, full name, bio, avatar, follower/following counts, and user activity posts.
- Users can follow and unfollow other users.
- Followers and following are browseable through profile modals.
- Notifications are generated for likes, comments, follows, and comment replies.
- Unread notification count powers the feed notification badge.

## Tech Stack

- Frontend: Expo, React Native, Expo Router, TypeScript
- Navigation: Expo Router file-based routing
- Maps: React Native Maps and MapLibre-related support
- Backend: Supabase Auth, Postgres, Row Level Security, Realtime, Storage
- Places: Google Places API and Google Geocoding
- Images: Expo Image/Image Picker, Supabase Storage, Wikidata image lookup for Explore
- Styling: React Native styles, NativeWind/Tailwind utilities, custom theme constants

## Tester Checklist

Use this when validating a release or TestFlight/internal build.

### Account and Profile

- Create a new account.
- Complete onboarding with a username and profile details.
- Restart the app while signed in and confirm it opens to the feed without showing sign-in first.
- Update profile details and avatar.
- Open another user's profile from feed, Explore, comments, notifications, and follower lists.

### Tracking and Saving

- Start a journey in Balanced mode.
- Move through at least one real stop long enough for place detection.
- Stop tracking and review the save screen.
- Confirm route, distance, duration, detected places, title, and notes look reasonable.
- Add a place photo.
- Like or dislike at least one visited place.
- Save the activity and confirm it appears in the feed.
- Try Manual mode by adding locations manually, then save.

### Feed and Posts

- Pull to refresh the feed.
- Like and unlike a post.
- Open comments, add a comment, and delete your own comment.
- Open a route map/post sheet from a feed card.
- Confirm friend-like avatars and counters update correctly.

### Explore

- Allow location permission.
- Confirm nearby popular spots load.
- Open a spot card or marker.
- Save a spot to want-to-go.
- Check friend context on a spot where followed users have visited or rated it.
- Try Explore with location permission denied and confirm the empty/error state is understandable.

### Plan

- Confirm saved want-to-go places appear.
- Open a saved spot from Plan.
- Verify liked/disliked visited places render with the expected icon treatment.

### Social

- Search for users.
- Follow and unfollow a user.
- Check follower/following counts.
- Confirm followed users' activity posts appear in Home.

### Notifications

- From another account, like a post, comment on a post, reply in a thread, and follow the user.
- Confirm notifications appear with correct actor, type, and target.
- Open notifications and confirm unread state clears.
