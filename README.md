# Project 1 - File Organizer Tool

This is a simple Python project created for SoftGrowTech Task 2. The program organizes files automatically into separate folders based on their file types.

## Features

- Scans files from a selected folder
- Separates images, documents, videos, audio files, archives, code files, and other files
- Creates folders automatically
- Moves files into their correct folders
- Shows a message after organizing files

## Technologies Used

- Python
- File handling
- `pathlib` module
- `shutil` module

## How to Run

Open the project folder in terminal and run:

```bash
python file_organizer.py
```

Then enter the folder path you want to organize.

Example:

```text
/Users/yourname/Downloads
```

## Frontend

This project also includes a simple frontend for demonstration.

Open this file in a browser:

```text
frontend/index.html
```

The frontend shows how selected files are grouped into different categories.

## Note

The actual file moving is done by the Python file because browsers cannot directly move files on your computer for security reasons.
