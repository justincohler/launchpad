var stateid = {
  "type": "Drivers License",
  "name_on_card": "Jane Doe",
  "id_number": "S403592718",
  "state": "NY"
  "issued_date" : ISODate(),
  "expiration_date" : ISODate(),
  "status": "APPLIED",
  "status_updated_date": ISODate(),
  "confirmation_code": "123a0bn",
  "score": 10,
  "comments": [
    {
      "comment": "Hello World",
      "commenter": "John Doe",
      "posted_date": ISODate()
    }
  ]
}

var passport = {
  "type": "Passport",
  "name_on_card": "Jane Doe",
  "passport_number": "12345",
  "country": "United States",
  "issued_date": ISODate(),
  "expiration_date": ISODate(),
  "status": "APPROVED",
  "status_updated_date": ISODate(),
  "confirmation_code": "10n0bj",
  "score": 8,
  "comments": [
    {
      "comment": "Hello World",
      "commenter": "Jane Doe",
      "posted_date": ISODate()
    }
  ]
}

var birth_certificate = {
  "type": "Birth Certificate",
  "name_on_card": "Jane Doe",
  "document_number": "J12093"
  "birth_date": ISODate(),
  "status": "REQUESTED",
  "status_updated_date": ISODate(),
  "confirmation_code": "555abc",
  "score": 6,
  "comments": [
    {
      "comment": "Hello World!",
      "commenter": "John Doe",
      "posted_date": ISODate(),
    }
  ]
}

var ssn = {
  "type": "SSN",
  "name_on_card": "Jane Doe",
  "document_number": "555-55-5555"
  "status": "IN POSESSION",
  "status_updated_date": ISODate(),
  "confirmation_code": "555abc",
  "score": 10,
  "comments": []
}

var mission = {
  "name": "Important Documents",
  "due_date": ISODate(),
  "status": "ACTIVE",
  "status_updated_date": ISODate(),
  "tasks": [
    {
      "_id": "111aaa",
      "name": "Social Security Card",
      "status": "OBTAINED",
      "status_updated_date": ISODate()
    },
    {
      "_id": "222bbb",
      "name": "State Identification",
      "status": "OBTAINED",
      "status_updated_date": ISODate()
    },
    {
      "_id": "333ccc",
      "name": "Passport",
      "status": "APPLIED",
      "status_updated_date": ISODate()
    }
  ]
}
