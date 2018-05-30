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
            "field": "Vorname",
            "description": ""
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
    "version": "0.0.0",
    "filename": "./routes/api/user.js",
    "groupTitle": "User",
    "name": "DeleteApiUserUserDelete"
  },
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
            "field": "Vorname",
            "description": ""
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
    "version": "0.0.0",
    "filename": "./routes/api/name-delete.js",
    "groupTitle": "User",
    "name": "DeleteApiUserUserDelete"
  },
  {
    "type": "post",
    "url": "/api/user/user-input",
    "title": "Input a new user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Vorname",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Nachname",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Vorname\": \"Wentao\",\n  \"Nachname\": \"Liu\",\n  \"Email\": \"Wentao.Liu@fh-stralsund.de\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Vorname",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nachname",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "done",
            "defaultValue": "false",
            "description": "<p>is done?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Update date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Register date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"Vorname\": \"Wentao\",\n  \"Nachname\": \"Liu\",\n  \"Email\": \"Wentao.Liu@fh-stralsund.de\",\n  \"done\": false,\n  \"updated_at\": \"2018-05-25T15:46:51.778Z\",\n  \"created_at\": \"2018-05-25T15:46:51.778Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api/user.js",
    "groupTitle": "User",
    "name": "PostApiUserUserInput"
  },
  {
    "type": "post",
    "url": "/api/user/user-input",
    "title": "Input a new user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Vorname",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Nachname",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Vorname\": \"Wentao\",\n  \"Nachname\": \"Liu\",\n  \"Email\": \"Wentao.Liu@fh-stralsund.de\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Vorname",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nachname",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "done",
            "defaultValue": "false",
            "description": "<p>is done?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Update date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Register date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"Vorname\": \"Wentao\",\n  \"Nachname\": \"Liu\",\n  \"Email\": \"Wentao.Liu@fh-stralsund.de\",\n  \"done\": false,\n  \"updated_at\": \"2018-05-25T15:46:51.778Z\",\n  \"created_at\": \"2018-05-25T15:46:51.778Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api/name-input.js",
    "groupTitle": "User",
    "name": "PostApiUserUserInput"
  },
  {
    "type": "post",
    "url": "/api/user/submit-login",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "submit_login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "loginName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "loginPass",
            "description": "<p>密码</p>"
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
          "content": "{\n    \"success\" : \"true\",\n    \"result\" : {\n        \"name\" : \"loginName\",\n        \"password\" : \"loginPass\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/user/submit-login"
      }
    ],
    "version": "1.0.0",
    "filename": "./routes/api/user.js",
    "groupTitle": "User"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/read.js",
    "group": "_home_user_docker_test_node_modules_body_parser_lib_read_js",
    "groupTitle": "_home_user_docker_test_node_modules_body_parser_lib_read_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/json.js",
    "group": "_home_user_docker_test_node_modules_body_parser_lib_types_json_js",
    "groupTitle": "_home_user_docker_test_node_modules_body_parser_lib_types_json_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/raw.js",
    "group": "_home_user_docker_test_node_modules_body_parser_lib_types_raw_js",
    "groupTitle": "_home_user_docker_test_node_modules_body_parser_lib_types_raw_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/text.js",
    "group": "_home_user_docker_test_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "_home_user_docker_test_node_modules_body_parser_lib_types_text_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/text.js",
    "group": "_home_user_docker_test_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "_home_user_docker_test_node_modules_body_parser_lib_types_text_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "_home_user_docker_test_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "_home_user_docker_test_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "_home_user_docker_test_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "_home_user_docker_test_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "_home_user_docker_test_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "_home_user_docker_test_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_user_docker_test_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_user_docker_test_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_user_docker_test_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_user_docker_test_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_user_docker_test_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_user_docker_test_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_user_docker_test_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_user_docker_test_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "_home_user_docker_test_node_modules_bson_browser_build_bson_js",
    "groupTitle": "_home_user_docker_test_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "_home_user_docker_test_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_user_docker_test_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "_home_user_docker_test_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_user_docker_test_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "_home_user_docker_test_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_user_docker_test_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "_home_user_docker_test_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_user_docker_test_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "_home_user_docker_test_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "_home_user_docker_test_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/clean-css/node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_clean_css_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "_home_user_docker_test_node_modules_commander_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_content_disposition_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cookie-signature/index.js",
    "group": "_home_user_docker_test_node_modules_cookie_signature_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_cookie_signature_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cookie-signature/index.js",
    "group": "_home_user_docker_test_node_modules_cookie_signature_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_cookie_signature_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/css-stringify/index.js",
    "group": "_home_user_docker_test_node_modules_css_stringify_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_css_stringify_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_user_docker_test_node_modules_debug_src_browser_js",
    "groupTitle": "_home_user_docker_test_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_user_docker_test_node_modules_debug_src_browser_js",
    "groupTitle": "_home_user_docker_test_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_user_docker_test_node_modules_debug_src_browser_js",
    "groupTitle": "_home_user_docker_test_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_user_docker_test_node_modules_debug_src_browser_js",
    "groupTitle": "_home_user_docker_test_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "_home_user_docker_test_node_modules_debug_src_browser_js",
    "groupTitle": "_home_user_docker_test_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_user_docker_test_node_modules_debug_src_debug_js",
    "groupTitle": "_home_user_docker_test_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_user_docker_test_node_modules_debug_src_debug_js",
    "groupTitle": "_home_user_docker_test_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_user_docker_test_node_modules_debug_src_debug_js",
    "groupTitle": "_home_user_docker_test_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_user_docker_test_node_modules_debug_src_debug_js",
    "groupTitle": "_home_user_docker_test_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_user_docker_test_node_modules_debug_src_debug_js",
    "groupTitle": "_home_user_docker_test_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "_home_user_docker_test_node_modules_debug_src_debug_js",
    "groupTitle": "_home_user_docker_test_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "_home_user_docker_test_node_modules_debug_src_node_js",
    "groupTitle": "_home_user_docker_test_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "_home_user_docker_test_node_modules_debug_src_node_js",
    "groupTitle": "_home_user_docker_test_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "_home_user_docker_test_node_modules_debug_src_node_js",
    "groupTitle": "_home_user_docker_test_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/etag/index.js",
    "group": "_home_user_docker_test_node_modules_etag_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_etag_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/express.js",
    "group": "_home_user_docker_test_node_modules_express_lib_express_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_express_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/middleware/init.js",
    "group": "_home_user_docker_test_node_modules_express_lib_middleware_init_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_middleware_init_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/middleware/query.js",
    "group": "_home_user_docker_test_node_modules_express_lib_middleware_query_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_middleware_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "_home_user_docker_test_node_modules_express_lib_router_layer_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "_home_user_docker_test_node_modules_express_lib_router_layer_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "_home_user_docker_test_node_modules_express_lib_router_layer_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/route.js",
    "group": "_home_user_docker_test_node_modules_express_lib_router_route_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_router_route_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/body-parser/lib/read.js",
    "group": "_home_user_docker_test_node_modules_express_node_modules_body_parser_lib_read_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_node_modules_body_parser_lib_read_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/body-parser/lib/types/json.js",
    "group": "_home_user_docker_test_node_modules_express_node_modules_body_parser_lib_types_json_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_node_modules_body_parser_lib_types_json_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/body-parser/lib/types/raw.js",
    "group": "_home_user_docker_test_node_modules_express_node_modules_body_parser_lib_types_raw_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_node_modules_body_parser_lib_types_raw_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/body-parser/lib/types/text.js",
    "group": "_home_user_docker_test_node_modules_express_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_node_modules_body_parser_lib_types_text_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/body-parser/lib/types/text.js",
    "group": "_home_user_docker_test_node_modules_express_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_node_modules_body_parser_lib_types_text_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/body-parser/lib/types/urlencoded.js",
    "group": "_home_user_docker_test_node_modules_express_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/body-parser/lib/types/urlencoded.js",
    "group": "_home_user_docker_test_node_modules_express_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/node_modules/body-parser/lib/types/urlencoded.js",
    "group": "_home_user_docker_test_node_modules_express_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "_home_user_docker_test_node_modules_express_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/jade.js",
    "group": "_home_user_docker_test_node_modules_jade_jade_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_jade_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/compiler.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/index.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/index.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/index.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/index.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/index.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/index.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/index.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/index.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/index.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/lexer.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_lexer_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_lexer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/lexer.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_lexer_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_lexer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/lexer.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_lexer_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_lexer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/lexer.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_lexer_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_lexer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/lexer.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_lexer_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_lexer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/lexer.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_lexer_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_lexer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/lexer.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_lexer_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_lexer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/lexer.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_lexer_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_lexer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/lexer.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_lexer_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_lexer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/attrs.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_attrs_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_attrs_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/attrs.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_attrs_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_attrs_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/attrs.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_attrs_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_attrs_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/attrs.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_attrs_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_attrs_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/block-comment.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_block_comment_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_block_comment_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/block.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_block_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_block_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/block.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_block_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_block_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/block.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_block_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_block_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/block.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_block_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_block_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/block.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_block_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_block_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/block.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_block_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_block_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/block.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_block_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_block_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/case.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_case_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_case_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/code.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_code_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_code_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/comment.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_comment_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_comment_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/doctype.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_doctype_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_doctype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/each.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_each_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_each_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/filter.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_filter_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_filter_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/literal.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_literal_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_literal_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/mixin-block.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_mixin_block_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_mixin_block_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/mixin.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_mixin_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_mixin_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/node.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_node_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/tag.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_tag_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_tag_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/tag.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_tag_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_tag_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/tag.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_tag_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_tag_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/tag.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_tag_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_tag_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/nodes/text.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_nodes_text_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_nodes_text_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/parser.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_parser_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_parser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/parser.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_parser_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_parser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/parser.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_parser_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_parser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/parser.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_parser_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_parser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/parser.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_parser_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_parser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/parser.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_parser_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_parser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/parser.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_parser_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_parser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/parser.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_parser_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/parser.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_parser_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/runtime.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_runtime_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_runtime_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/runtime.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_runtime_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_runtime_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/runtime.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_runtime_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_runtime_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/runtime.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_runtime_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_runtime_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/lib/utils.js",
    "group": "_home_user_docker_test_node_modules_jade_lib_utils_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_lib_utils_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/runtime.js",
    "group": "_home_user_docker_test_node_modules_jade_runtime_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_runtime_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/runtime.js",
    "group": "_home_user_docker_test_node_modules_jade_runtime_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_runtime_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/runtime.js",
    "group": "_home_user_docker_test_node_modules_jade_runtime_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_runtime_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jade/runtime.js",
    "group": "_home_user_docker_test_node_modules_jade_runtime_js",
    "groupTitle": "_home_user_docker_test_node_modules_jade_runtime_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/lazy-cache/index.js",
    "group": "_home_user_docker_test_node_modules_lazy_cache_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_lazy_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "_home_user_docker_test_node_modules_media_typer_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "_home_user_docker_test_node_modules_media_typer_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "_home_user_docker_test_node_modules_media_typer_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "_home_user_docker_test_node_modules_media_typer_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "_home_user_docker_test_node_modules_media_typer_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/monk/lib/helpers.js",
    "group": "_home_user_docker_test_node_modules_monk_lib_helpers_js",
    "groupTitle": "_home_user_docker_test_node_modules_monk_lib_helpers_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "_home_user_docker_test_node_modules_ms_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "_home_user_docker_test_node_modules_ms_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "_home_user_docker_test_node_modules_ms_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "_home_user_docker_test_node_modules_ms_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/on-headers/index.js",
    "group": "_home_user_docker_test_node_modules_on_headers_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_on_headers_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/path-to-regexp/index.js",
    "group": "_home_user_docker_test_node_modules_path_to_regexp_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_path_to_regexp_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/repeat-string/index.js",
    "group": "_home_user_docker_test_node_modules_repeat_string_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_repeat_string_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "_home_user_docker_test_node_modules_send_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/util-deprecate/browser.js",
    "group": "_home_user_docker_test_node_modules_util_deprecate_browser_js",
    "groupTitle": "_home_user_docker_test_node_modules_util_deprecate_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/util-deprecate/browser.js",
    "group": "_home_user_docker_test_node_modules_util_deprecate_browser_js",
    "groupTitle": "_home_user_docker_test_node_modules_util_deprecate_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/utils-merge/index.js",
    "group": "_home_user_docker_test_node_modules_utils_merge_index_js",
    "groupTitle": "_home_user_docker_test_node_modules_utils_merge_index_js",
    "name": "Public"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./public/apidoc/main.js",
    "group": "_home_user_docker_test_public_apidoc_main_js",
    "groupTitle": "_home_user_docker_test_public_apidoc_main_js",
    "name": ""
  }
] });
