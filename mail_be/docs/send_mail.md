# ** Mail Sending **

API for send mail.

## URL

| ** Method **     | POST                      |
| ---------------- | ------------------------- |
| ** Structure **  | `/api/:version/mail`      |
| ** Example **    | `/api/v1/mail`            |

## Header Params

| Key                 | Value                  | Required     | Description                     |
| ------------------- | --------------------   | :----------: | ------------------------------- |
| Content-Type        | application/json       | false        |                                 |

## Data Params

| Field Name     | Required     | Type     | Default Value  | Description                               |
| -------------- | :----------: | :------: | :------------: | ----------------------------------------- |
| to_mail        | true         | String   |                |                                           |
| from_mail      | true         | String   |                |                                           |
| subject        | false        | String   | ""             |                                           |
| text           | false        | String   | ""             |                                           |

## Example Request Body
```json
{
    "from_mail": "fastworktest@gmail.com",
    "to_mail": "target@hotmail.com",
    "subject": "hello",
    "text": "I am writing to say hi."
}
```

## Success Response
```json
{
    "message": "Successful sent email to target@hotmail.com"
}
```

## Error Response
```json
{
    "message": "Fail sent email to target@hotmail.com"
}
```

## Definition
[Error code](error-code.md)