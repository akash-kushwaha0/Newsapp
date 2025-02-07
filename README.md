# Threads - Modern Social Media App

This is a full-stack modern social media application inspired by the [original project](https://github.com/adrianhajdin/threads) by Adrian Hajdin. This project features user authentication, real-time posts, and an intuitive UI.

## Features

- User authentication (OAuth, JWT)
- Post creation, editing, and deletion
- Real-time interactions
- Responsive design with modern UI/UX
- Built using React, Next.js, and Tailwind CSS
- Backend powered by MongoDB and Node.js

## Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: NextAuth.js
- **Deployment**: Vercel, MongoDB Atlas

## Installation

To clone and run this project locally, use the following command:

```sh
git clone https://github.com/akash-kushwaha0/threads.git
cd threads
npm install
npm run dev
```

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file and configure environment variables.
4. Start the development server with `npm run dev`.
5. Open `http://localhost:3000` in your browser.

## Folder Structure

```
├── src
│   ├── components    # Reusable UI components
│   ├── context       # Context API for state management
│   ├── pages         # Next.js page components
│   ├── styles        # Global styles
│   ├── utils         # Helper functions
├── public            # Static assets
├── package.json      # Project dependencies
└── README.md         # Project documentation
```

## Deployment

You can deploy this project on platforms like:

- Vercel
- Netlify
- Render

## Contributing

Feel free to fork this repository, make changes, and submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

