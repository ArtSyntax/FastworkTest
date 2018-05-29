# ** View Mail History **

API for viewing mail history.

## URL

| ** Method **     | GET                                                       |
| ---------------- | :-------------------------------------------------------: |
| ** Structure **  | `/api/:version/mail/:query_param`                         |
| ** Example **    | `/api/v1/mail`                                            |
| ** Example **    | `/api/v1/mail?subject=hello&to_mail=target@hotmail.com`   |

## Success Response
```json
[
    {
        "id": 1,
        "to_mail": "target@hotmail.com",
        "from_mail": "fastworktest@gmail.com",
        "subject": "hi5",
        "text": "hahahaha",
        "status": "S",
        "timestamp": "2018-05-29T14:09:51.456301Z"
    },
    {
        "id": 2,
        "to_mail": "target@hotmail.com",
        "from_mail": "fastworktest@gmail.com",
        "subject": "hi again",
        "text": "hello and goodbye",
        "status": "F",
        "timestamp": "2018-05-29T19:11:02.363653Z"
    }
]
```

## Definition
[Error code](error-code.md)