# Stopwatch Application

This repository contains a **Stopwatch Web Application** implemented using **HTML**, **CSS**, **JavaScript**, and **jQuery**. The application features precise timing, lap tracking, and a user-friendly interface.

---

## Features

- **Start, Stop, and Resume**: Easily control the stopwatch's state.
- **Lap Tracking**: Record up to **6 laps**, with the ability to view elapsed and lap times.
- **Reset Functionality**: Quickly reset the timer and lap history.
- **Dynamic Notifications**: Display messages for key events, such as reaching the lap limit.
- **Non-Blocking Notifications**: Notifications are shown without interrupting functionality.

---

## Demo

Check out the live demo [here](https://Kirubel-Te.github.io/Stop_watch).

---

## Installation and Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/Kirubel-Te/Stop_watch.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Stop_watch
   ```

3. Open the `index.html` file in your browser:
   ```bash
   open index.html
   ```
   *(Or double-click the file to launch in your default browser.)*

---

## Code Overview

### Key Components:

1. **Timer Logic**: 
   - The `ETime` and `LTime` objects track elapsed and lap times, respectively.
   - Timer increments every 10ms using `setInterval`.

2. **Lap Functionality**:
   - Records lap times up to a limit of 6 laps.
   - Displays both lap time and total elapsed time.

3. **Dynamic Updates**:
   - Timer display updates in real-time.
   - Laps are dynamically added to the DOM using jQuery.

4. **Notifications**:
   - **Lap Limit Notification**: Displays a warning when the lap limit is reached using a `Lapnotification` function.

5. **Reset Behavior**:
   - Resets all states, clears lap history, and restores default UI settings.

---

## File Structure

```
/stopwatch-app
├── index.html          # Main HTML file
├── style.css           # Stylesheet 
├── script.js           # JavaScript 
└── README.md           # Project documentation
```

---

## How to Use

1. **Start the Stopwatch**:
   - Click the **Start** button to begin the timer.
   
2. **Stop and Resume**:
   - Click the **Stop** button to pause the timer.
   - Click **Resume** to continue timing.

3. **Record Laps**:
   - While the stopwatch is running, click **Lap** to record the lap time.
   - Up to **6 laps** can be recorded. 

4. **Reset the Timer**:
   - Click **Reset** to clear the timer and lap history.

---

## Customization

- **Lap Limit**:
  Modify the `count` check in the `$(".lap").click` function to change the maximum number of laps.
  
- **Notification Duration**:
  Adjust the `duration` parameter in the `Lapnotification` function.

---

## Dependencies

- **jQuery**: Ensure jQuery is included in your project. You can use the following CDN:

  ```html
  <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
  ```

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Acknowledgments

- **jQuery Documentation**: For simplifying DOM manipulation.
