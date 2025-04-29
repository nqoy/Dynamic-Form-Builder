# Dynamic Form Builder

A responsive form-rendering application that dynamically generates forms based on JSON schema definitions. Built with React, TypeScript, and React Hook Form.

## Overview
![image](https://github.com/user-attachments/assets/9a0e8401-f486-4870-886a-e667a4c750e6)

This application fetches a JSON schema from an API endpoint and renders a customizable form with real-time validation. It's built using:

- React with TypeScript
- Vite as the build tool
- React Hook Form for form management
- Vanilla CSS for styling

## Features

- 🔄 **Dynamic Form Generation**: Renders forms based on a JSON schema
- ✅ **Real-Time Validation**: Validates inputs as the user types
- 📱 **Responsive Design**: Works on all screen sizes
- 🧩 **Multiple Input Types**: Supports text inputs, textareas, number inputs, select dropdowns, and more
- 🚦 **Validation Rules**: Implements required fields, min/max values, and regex patterns

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dynamic-form-builder.git
   cd dynamic-form-builder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## How It Works

1. The application fetches a JSON schema from the configured endpoint
2. It parses the schema and dynamically generates form fields
3. As users interact with the form, real-time validation occurs based on the schema rules
4. The submit button remains disabled until all validations pass
5. Upon submission, the form data is displayed in a formatted view

## JSON Schema Structure

The form is generated based on a JSON schema with the following structure:

```json
[
  {
    "title": "Section Title",
    "fields": [
      {
        "type": "<input_type>",
        "label": "Field Label",
        "rules": {
          "required": {
            "value": <boolean>,
            "error_message": "Error message"
          },
          "min": {
            "value": <number>,
            "error_message": "Min length message with {{value}}"
          },
          "max": {
            "value": <number>,
            "error_message": "Max length message with {{value}}"
          },
          "regex": {
            "value": <regex_pattern>,
            "error_message": "Regex validation message"
          }
        }
      },
      // Additional fields...
    ]
  }
]
```

### Supported Field Types

- `input`: Text input field
- `input_number`: Numeric input field
- `textarea`: Multi-line text input
- `select`: Dropdown selection (requires an `options` array)

### Validation Rules

- `required`: Makes the field mandatory
- `min`: Minimum length for text or minimum value for numbers
- `max`: Maximum length for text or maximum value for numbers
- `regex`: Regular expression pattern validation

## Configuration

To configure the schema endpoint URL, modify the `.env` file:

```
VITE_SCHEMA_ENDPOINT=https://your-api-endpoint.com/schema
```
