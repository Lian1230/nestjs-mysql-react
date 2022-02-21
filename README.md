# NestJS-Prisma-React

### API documentation:

`GET`

- `/users`: Fetch all users (for dev only)
- `/feedbacks`: Fetch all user feedbacks

  - query:
    - `pageSize: string` (required) number of result per page
    - `current: string` (required) current page
    - `sort: string` (optional) sorting config
    - `startedAt: string` (optional) search feedback from this date
    - `endTime: string` (optional) search feedback end to this date

<!-- - /games: Fetch all games
  - query:
    - `userId: number` (optional) the userId. If provided, only return games that user played
    - `includeSessions: string` (optional) if provided, includes the related sessions in each game -->

- `/games/sessions-no-comment`: Fetch all game sessions that haven't been commented by an user
  - query:
    - `userId: string` (required) userId

`POST`

- `/feedback`: Create a new feedback
  - body:
    - `userId: number` (required) the userId
    - `sessionId: number` (required) the sessionId on which the user comments
    - `rating: number` (required) the rating user put on this session
    - `content: string` (required) the comment, can be empty

&nbsp;

---

&nbsp;

### Instructions for launching and testing your API locally:

#### **Prerequisite**:

npm/node, docker & docker-compose, available port at 3306, 3001 and 3000.

#### Install dependencies:

```
npm run dep
```

#### Start database:

```
npm run db.start
```

A mysql db should be alive at 3306, you can check it via phpAdmin at: http://localhost:8080/.

#### Initialize and seed database:

```
npm run db.init
npm run db.seed
```

The db should be now loaded with mock data.

#### Start api service:

```
npm run api.dev
```

NestJS server runs at 3001.

#### Start ui:

```
npm run ui.dev
```

UI runs at http://localhost:3000/

&nbsp;

---

&nbsp;

### Assumptions and Tech Choices:

- **SQL over NoSQL**: the data is pretty structured and predictable. Also in the requirement, there's an unique contraint on the userId and sessionId.

- **No redis or other memory db**: the use case doesn't seems to involve with high traffic in a short period time.

- **Choice of NestJS**: better than express.

- **Choice of Prisma ORM**: ORM is a must so it's possible to swith db easily in the future. First time using Prisma but a big fan now.

- **Choice of using docker for db**: might be the easiest way to run a local db.

- **SPA over SSR or static-site-generator**: Assume no SEO requirement and it's easy to develop.

- **Choice of UI lib ant-design**: Contains some advanced components like the pro-table that can do serverside mode.

- **No redux but redux-like**: Didn't use redux but built a redux-like state management with react hooks. Store is also accessible in Redux-Devtool.

- **Cypress test**: Due to limit time, only includes the most import e2e test for now.
