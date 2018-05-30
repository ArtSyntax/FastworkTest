# ** View Mail History **

API for viewing mail history.

## URL

| ** Method **     | GET                                                       |
| ---------------- | --------------------------------------------------------- |
| ** Structure **  | `/api/:version/mail/:query_param`                         |
| ** Example **    | `/api/v1/mail`                                            |
| ** Example **    | `/api/v1/mail?subject=hello&to_mail=target@hotmail.com`   |

## Success Response
```json
[
    {
        "to_mail": "target@hotmail.com",
        "from_mail": "fastworktest@gmail.com",
        "subject": "hi5",
        "text": "hahahaha",
        "status": "Success",
        "timestamp": "29 May 2018 - 11:19"
    },
    {
        "to_mail": "target@hotmail.com",
        "from_mail": "fastworktest@gmail.com",
        "subject": "hi again",
        "text": "hello and goodbye",
        "status": "Fail",
        "timestamp": "29 May 2018 - 11:23"
    }
]
```

## Definition
[Error code](error-code.md)