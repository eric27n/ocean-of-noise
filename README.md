# Ocean of Noise

Ocean of Noise is a music recommender system designed to help users discover new artists by harnessing data from indie and eclectic radio stations. Whether you're a seasoned music enthusiast or someone looking to explore diverse genres, Ocean of Noise aims to enhance your music discovery experience.

## Getting Started

### Run the Backend

1. Open a terminal and navigate to the "backend" directory.
2. Run the following command to start the backend server:

   ```bash
   python base.py
   ```

Note: Ensure you have the required Python packages installed. If not, you may need to install them; refer to the backend documentation for details.

### Run the Frontend

1. Open another terminal.
2. Navigate to the project root directory.
3. Install the frontend dependencies:

   ```bash
   npm install
   ```

   ```bash
   npm run dev
   ```

If you encounter errors related to missing packages, try deleting the node_modules directory and then run "npm install" again. Additionally, install the react-router-dom package separately if needed:

```bash
npm install react-router-dom
```

### New Features

- **Clickable Track Navigation:** You can now click on any track to navigate to its corresponding page.
