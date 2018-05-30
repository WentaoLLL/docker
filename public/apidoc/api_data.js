define({ "api": [
  {
    "type": "delete",
    "url": "/api/user/user-delete",
    "title": "Remove a task",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "idNummer",
            "description": "<p>idNummer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Vorname",
            "description": "<p>Vorname</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Nachname",
            "description": "<p>Nachname</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Email",
            "description": "<p>Email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/newname"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/name-delete.js",
    "groupTitle": "User",
    "name": "DeleteApiUserUserDelete"
  },
  {
    "type": "get",
    "url": "/api/user/name-list",
    "title": "List all names",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "idNummer",
            "description": "<p>idNummer</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Vorname",
            "description": "<p>Vorname</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Nachname",
            "description": "<p>Nachname</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "names.done",
            "description": "<p>Task is done?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "names.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "names.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"idNummer\" : \"idNummer\",\n  \"Vorname\" : \"Vorname\",\n  \"Nachname\" : \"Nachname\",\n  \"Email\" : \"Email\",\n  \"done\": false\n  \"updated_at\": \"2016-02-10T15:46:51.778Z\",\n  \"created_at\": \"2016-02-10T15:46:51.778Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/namelist"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/name-list.js",
    "groupTitle": "User",
    "name": "GetApiUserNameList"
  },
  {
    "type": "post",
    "url": "/api/user/input",
    "title": "Input a User",
    "description": "<p>Input a User</p>",
    "name": "input",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "idNummer",
            "description": "<p>idNummer</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Vorname",
            "description": "<p>Vorname</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Nachname",
            "description": "<p>Nachname</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Email",
            "description": "<p>Email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\" : \"true\",\n    \"result\" : {\n        \"idNummer\" : \"idNummer\"\n        \"Vorname\" : \"Vorname\",\n        \"Nachname\" : \"Nachname\",\n        \"Email\" : \"Email\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/newname"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/api/name-input.js",
    "groupTitle": "User"
  }
] });
