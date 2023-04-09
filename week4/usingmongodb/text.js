 Use Website In a Screen - Reader Mode
Skip to Content
↵ENTER
Skip to Menu
↵ENTER
Skip to Footer
↵ENTER
 
Coding Dojo
Online Part - Time Accelerated 1 Stack Courses
home
learn
contact
user icon

Courses
Unit
    Assignment Checklist
Stats
    Take Exams 

MERN PART - TIME ONLINE
Course IconMongoDB
MongoDB

Overview
Installing - Windows
Installing - MAC
Basics
Documents
Operators
    Quiz I
    Quiz II
    Using MongoDB
    Chapter Survey

Mongoose

Practice
Deadline: Monday of Week 5
    Difficulty Level: Basic
Est.Time: 1 - 2 hrs 

Using MongoDB


As you create the documents for this assignment, be sure to include students who have:

    home_state of California or Washington
    lucky_number ranging from 1 to 15

If you read through all tasks, you will understand these requirements better

To complete this assignment, copy your console text from the MongoDB shell into a text document and upload it to the platform

Create a database called 'my_first_db'.

Create students collection.

Each document you insert into this collection should have the following format: ({ name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: { month: NUMBER, day: NUMBER, year: NUMBER } })

Create 5 students with the appropriate info.

Get all students.

Retrieve all students who are from California(San Jose Dojo) or Washington(Seattle Dojo).

Get all students whose lucky number is greater than 3

Get all students whose lucky number is less than or equal to 10

Get all students whose lucky number is between 1 and 9(inclusive)

Add a field named 'interests' to all student documents in the collection.The field should be an array and contain the following entries: 'coding', 'brunch', MongoDB'. Add this field to all documents using a single command.

Add some unique interests for each particular student into each of their interest arrays.

Add the interest 'taxes' into someone's interest array.

Remove the 'taxes' interest you just added.

Remove all students who are from California.

Remove a student by name.

Remove a student whose lucky number is greater than 5(JUST ONE)

Add a field to each student document called 'number_of_belts' and set it to 0.

Increment this field by 1 for all students in Washington(Seattle Dojo).

Rename the 'number_of_belts' field to 'belts_earned'

Remove the 'lucky_number' field.

Add a 'updated_on' field, and set the value as the current date.
    Submit

Note:
Please
Zip
your file(s) before uploading.
    upload - icon

Drag & drop your files
or Browse
Previous
Using MongoDB

"day" : 8,
    "year" : 1974
	}
}
{
    "_id" : ObjectId("61550339246358961f04bac0"),
        "name" : "Josh Gendal",
            "home_state" : "Florida",
                "lucky_number" : 14,
                    "birthday" : {
        "month" : 1,
            "day" : 5,
                "year" : 1991
    }
}
> db.students.find({ lucky_number: { $lte: 10 } }).pretty()
{
    "_id" : ObjectId("61550294246358961f04babd"),
        "name" : "Elon Musk",
            "home_state" : "California",
                "lucky_number" : 4,
                    "birthday" : {
        "month" : 3,
            "day" : 5,
                "year" : 1968
    }
}
> db.students.find({ lucky_number: { $gte: 1, $lte: 9 } }).pretty()
{
    "_id" : ObjectId("61550294246358961f04babd"),
        "name" : "Elon Musk",
            "home_state" : "California",
                "lucky_number" : 4,
                    "birthday" : {
        "month" : 3,
            "day" : 5,
                "year" : 1968
    }
}
> db.students.find().pretty()
{
    "_id" : ObjectId("61550237246358961f04babc"),
        "name" : "Michael Jordan",
            "home_state" : "North Carolina",
                "lucky_number" : 23,
                    "birthday" : {
        "month" : 1,
            "day" : 28,
                "year" : 1965
    }
}
{
    "_id" : ObjectId("61550294246358961f04babd"),
        "name" : "Elon Musk",
            "home_state" : "California",
                "lucky_number" : 4,
                    "birthday" : {
        "month" : 3,
            "day" : 5,
                "year" : 1968
    }
}
{
    "_id" : ObjectId("615502c9246358961f04babe"),
        "name" : "Bill Gates",
            "home_state" : "Washington",
                "lucky_number" : 13,
                    "birthday" : {
        "month" : 10,
            "day" : 2,
                "year" : 1958
    }
}
{
    "_id" : ObjectId("615502fa246358961f04babf"),
        "name" : "Billy Bob",
            "home_state" : "Florida",
                "lucky_number" : 80,
                    "birthday" : {
        "month" : 7,
            "day" : 8,
                "year" : 1974
    }
}
{
    "_id" : ObjectId("61550339246358961f04bac0"),
        "name" : "Josh Gendal",
            "home_state" : "Florida",
                "lucky_number" : 14,
                    "birthday" : {
        "month" : 1,
            "day" : 5,
                "year" : 1991
    }
}
> db.students.updateMany({}, { $set: { interests: ['coding', 'brunch', 'MongoDB'] } })
{ "acknowledged" : true, "matchedCount" : 5, "modifiedCount" : 5 }
> db.students.find().pretty()
{
    "_id" : ObjectId("61550237246358961f04babc"),
        "name" : "Michael Jordan",
            "home_state" : "North Carolina",
                "lucky_number" : 23,
                    "birthday" : {
        "month" : 1,
            "day" : 28,
                "year" : 1965
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
{
    "_id" : ObjectId("61550294246358961f04babd"),
        "name" : "Elon Musk",
            "home_state" : "California",
                "lucky_number" : 4,
                    "birthday" : {
        "month" : 3,
            "day" : 5,
                "year" : 1968
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
{
    "_id" : ObjectId("615502c9246358961f04babe"),
        "name" : "Bill Gates",
            "home_state" : "Washington",
                "lucky_number" : 13,
                    "birthday" : {
        "month" : 10,
            "day" : 2,
                "year" : 1958
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
{
    "_id" : ObjectId("615502fa246358961f04babf"),
        "name" : "Billy Bob",
            "home_state" : "Florida",
                "lucky_number" : 80,
                    "birthday" : {
        "month" : 7,
            "day" : 8,
                "year" : 1974
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
{
    "_id" : ObjectId("61550339246358961f04bac0"),
        "name" : "Josh Gendal",
            "home_state" : "Florida",
                "lucky_number" : 14,
                    "birthday" : {
        "month" : 1,
            "day" : 5,
                "year" : 1991
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
> db.students.update({ name: 'Bill Gates' }, { $push: 'Microsoft' })
WriteResult({
    "nMatched": 0,
    "nUpserted": 0,
    "nModified": 0,
    "writeError": {
        "code": 9,
        "errmsg": "Modifiers operate on fields but we found type string instead. For example: {$mod: {<field>: ...}} not {$push: \"Microsoft\"}"
    }
})
    > db.students.update({ name: 'Bill Gates' }, { $push: { interests: 'Microsoft' } })
WriteResult({ "nMatched": 1, "nUpserted": 0, "nModified": 1 })
    > db.students.find().pretty()
{
    "_id" : ObjectId("61550237246358961f04babc"),
        "name" : "Michael Jordan",
            "home_state" : "North Carolina",
                "lucky_number" : 23,
                    "birthday" : {
        "month" : 1,
            "day" : 28,
                "year" : 1965
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
{
    "_id" : ObjectId("61550294246358961f04babd"),
        "name" : "Elon Musk",
            "home_state" : "California",
                "lucky_number" : 4,
                    "birthday" : {
        "month" : 3,
            "day" : 5,
                "year" : 1968
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
{
    "_id" : ObjectId("615502c9246358961f04babe"),
        "name" : "Bill Gates",
            "home_state" : "Washington",
                "lucky_number" : 13,
                    "birthday" : {
        "month" : 10,
            "day" : 2,
                "year" : 1958
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "Microsoft"
    ]
}
{
    "_id" : ObjectId("615502fa246358961f04babf"),
        "name" : "Billy Bob",
            "home_state" : "Florida",
                "lucky_number" : 80,
                    "birthday" : {
        "month" : 7,
            "day" : 8,
                "year" : 1974
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
{
    "_id" : ObjectId("61550339246358961f04bac0"),
        "name" : "Josh Gendal",
            "home_state" : "Florida",
                "lucky_number" : 14,
                    "birthday" : {
        "month" : 1,
            "day" : 5,
                "year" : 1991
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
> db.students.update({ name: 'Josh Gendal' }, { $push: { interests: 'guitar' } })
WriteResult({ "nMatched": 1, "nUpserted": 0, "nModified": 1 })
    > db.students.find().pretty()
{
    "_id" : ObjectId("61550237246358961f04babc"),
        "name" : "Michael Jordan",
            "home_state" : "North Carolina",
                "lucky_number" : 23,
                    "birthday" : {
        "month" : 1,
            "day" : 28,
                "year" : 1965
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
{
    "_id" : ObjectId("61550294246358961f04babd"),
        "name" : "Elon Musk",
            "home_state" : "California",
                "lucky_number" : 4,
                    "birthday" : {
        "month" : 3,
            "day" : 5,
                "year" : 1968
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
{
    "_id" : ObjectId("615502c9246358961f04babe"),
        "name" : "Bill Gates",
            "home_state" : "Washington",
                "lucky_number" : 13,
                    "birthday" : {
        "month" : 10,
            "day" : 2,
                "year" : 1958
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "Microsoft"
    ]
}
{
    "_id" : ObjectId("615502fa246358961f04babf"),
        "name" : "Billy Bob",
            "home_state" : "Florida",
                "lucky_number" : 80,
                    "birthday" : {
        "month" : 7,
            "day" : 8,
                "year" : 1974
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
{
    "_id" : ObjectId("61550339246358961f04bac0"),
        "name" : "Josh Gendal",
            "home_state" : "Florida",
                "lucky_number" : 14,
                    "birthday" : {
        "month" : 1,
            "day" : 5,
                "year" : 1991
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "guitar"
    ]
}
> db.students.update({ name: 'Michael Jordan' }, { $push: { interests: 'basketball' } })
WriteResult({ "nMatched": 1, "nUpserted": 0, "nModified": 1 })
    > db.students.find().pretty()
{
    "_id" : ObjectId("61550237246358961f04babc"),
        "name" : "Michael Jordan",
            "home_state" : "North Carolina",
                "lucky_number" : 23,
                    "birthday" : {
        "month" : 1,
            "day" : 28,
                "year" : 1965
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "basketball"
    ]
}
{
    "_id" : ObjectId("61550294246358961f04babd"),
        "name" : "Elon Musk",
            "home_state" : "California",
                "lucky_number" : 4,
                    "birthday" : {
        "month" : 3,
            "day" : 5,
                "year" : 1968
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
{
    "_id" : ObjectId("615502c9246358961f04babe"),
        "name" : "Bill Gates",
            "home_state" : "Washington",
                "lucky_number" : 13,
                    "birthday" : {
        "month" : 10,
            "day" : 2,
                "year" : 1958
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "Microsoft"
    ]
}
{
    "_id" : ObjectId("615502fa246358961f04babf"),
        "name" : "Billy Bob",
            "home_state" : "Florida",
                "lucky_number" : 80,
                    "birthday" : {
        "month" : 7,
            "day" : 8,
                "year" : 1974
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
{
    "_id" : ObjectId("61550339246358961f04bac0"),
        "name" : "Josh Gendal",
            "home_state" : "Florida",
                "lucky_number" : 14,
                    "birthday" : {
        "month" : 1,
            "day" : 5,
                "year" : 1991
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "guitar"
    ]
}
> db.students.update({ name: 'Elon Musk' }, { $push: { interests: 'taxes' } })
WriteResult({ "nMatched": 1, "nUpserted": 0, "nModified": 1 })
    > db.students.find().pretty()
{
    "_id" : ObjectId("61550237246358961f04babc"),
        "name" : "Michael Jordan",
            "home_state" : "North Carolina",
                "lucky_number" : 23,
                    "birthday" : {
        "month" : 1,
            "day" : 28,
                "year" : 1965
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "basketball"
    ]
}
{
    "_id" : ObjectId("61550294246358961f04babd"),
        "name" : "Elon Musk",
            "home_state" : "California",
                "lucky_number" : 4,
                    "birthday" : {
        "month" : 3,
            "day" : 5,
                "year" : 1968
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "taxes"
    ]
}
{
    "_id" : ObjectId("615502c9246358961f04babe"),
        "name" : "Bill Gates",
            "home_state" : "Washington",
                "lucky_number" : 13,
                    "birthday" : {
        "month" : 10,
            "day" : 2,
                "year" : 1958
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "Microsoft"
    ]
}
{
    "_id" : ObjectId("615502fa246358961f04babf"),
        "name" : "Billy Bob",
            "home_state" : "Florida",
                "lucky_number" : 80,
                    "birthday" : {
        "month" : 7,
            "day" : 8,
                "year" : 1974
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
{
    "_id" : ObjectId("61550339246358961f04bac0"),
        "name" : "Josh Gendal",
            "home_state" : "Florida",
                "lucky_number" : 14,
                    "birthday" : {
        "month" : 1,
            "day" : 5,
                "year" : 1991
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "guitar"
    ]
}
> db.students.update({ name: 'Elon Musk' }, { $pull: { interests: 'taxes' } })
WriteResult({ "nMatched": 1, "nUpserted": 0, "nModified": 1 })
    > db.students.find().pretty()
{
    "_id" : ObjectId("61550237246358961f04babc"),
        "name" : "Michael Jordan",
            "home_state" : "North Carolina",
                "lucky_number" : 23,
                    "birthday" : {
        "month" : 1,
            "day" : 28,
                "year" : 1965
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "basketball"
    ]
}
{
    "_id" : ObjectId("61550294246358961f04babd"),
        "name" : "Elon Musk",
            "home_state" : "California",
                "lucky_number" : 4,
                    "birthday" : {
        "month" : 3,
            "day" : 5,
                "year" : 1968
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
{
    "_id" : ObjectId("615502c9246358961f04babe"),
        "name" : "Bill Gates",
            "home_state" : "Washington",
                "lucky_number" : 13,
                    "birthday" : {
        "month" : 10,
            "day" : 2,
                "year" : 1958
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "Microsoft"
    ]
}
{
    "_id" : ObjectId("615502fa246358961f04babf"),
        "name" : "Billy Bob",
            "home_state" : "Florida",
                "lucky_number" : 80,
                    "birthday" : {
        "month" : 7,
            "day" : 8,
                "year" : 1974
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
{
    "_id" : ObjectId("61550339246358961f04bac0"),
        "name" : "Josh Gendal",
            "home_state" : "Florida",
                "lucky_number" : 14,
                    "birthday" : {
        "month" : 1,
            "day" : 5,
                "year" : 1991
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "guitar"
    ]
}
> db.students.insert({ name: 'Joe Schmo', home_state: 'California', lucky_number: 8, birthday: { month: 1, day: 1, year: 1989 } })
WriteResult({ "nInserted": 1 })
    > db.students.find().pretty()
{
    "_id" : ObjectId("61550237246358961f04babc"),
        "name" : "Michael Jordan",
            "home_state" : "North Carolina",
                "lucky_number" : 23,
                    "birthday" : {
        "month" : 1,
            "day" : 28,
                "year" : 1965
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "basketball"
    ]
}
{
    "_id" : ObjectId("61550294246358961f04babd"),
        "name" : "Elon Musk",
            "home_state" : "California",
                "lucky_number" : 4,
                    "birthday" : {
        "month" : 3,
            "day" : 5,
                "year" : 1968
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
{
    "_id" : ObjectId("615502c9246358961f04babe"),
        "name" : "Bill Gates",
            "home_state" : "Washington",
                "lucky_number" : 13,
                    "birthday" : {
        "month" : 10,
            "day" : 2,
                "year" : 1958
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "Microsoft"
    ]
}
{
    "_id" : ObjectId("615502fa246358961f04babf"),
        "name" : "Billy Bob",
            "home_state" : "Florida",
                "lucky_number" : 80,
                    "birthday" : {
        "month" : 7,
            "day" : 8,
                "year" : 1974
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
{
    "_id" : ObjectId("61550339246358961f04bac0"),
        "name" : "Josh Gendal",
            "home_state" : "Florida",
                "lucky_number" : 14,
                    "birthday" : {
        "month" : 1,
            "day" : 5,
                "year" : 1991
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "guitar"
    ]
}
{
    "_id" : ObjectId("61550ae0246358961f04bac1"),
        "name" : "Joe Schmo",
            "home_state" : "California",
                "lucky_number" : 8,
                    "birthday" : {
        "month" : 1,
            "day" : 1,
                "year" : 1989
    }
}
> db.students.remove({ home_state: 'California' })
WriteResult({ "nRemoved": 2 })
    > db.students.find().pretty()
{
    "_id" : ObjectId("61550237246358961f04babc"),
        "name" : "Michael Jordan",
            "home_state" : "North Carolina",
                "lucky_number" : 23,
                    "birthday" : {
        "month" : 1,
            "day" : 28,
                "year" : 1965
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "basketball"
    ]
}
{
    "_id" : ObjectId("615502c9246358961f04babe"),
        "name" : "Bill Gates",
            "home_state" : "Washington",
                "lucky_number" : 13,
                    "birthday" : {
        "month" : 10,
            "day" : 2,
                "year" : 1958
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "Microsoft"
    ]
}
{
    "_id" : ObjectId("615502fa246358961f04babf"),
        "name" : "Billy Bob",
            "home_state" : "Florida",
                "lucky_number" : 80,
                    "birthday" : {
        "month" : 7,
            "day" : 8,
                "year" : 1974
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
{
    "_id" : ObjectId("61550339246358961f04bac0"),
        "name" : "Josh Gendal",
            "home_state" : "Florida",
                "lucky_number" : 14,
                    "birthday" : {
        "month" : 1,
            "day" : 5,
                "year" : 1991
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "guitar"
    ]
}
> db.students.find().pretty().count()
4
    > db.students.remove({ name: 'Josh Gendal' })
WriteResult({ "nRemoved": 1 })
    > db.students.remove({ name: 'Josh Gel' })
WriteResult({ "nRemoved": 0 })
    > db.students.find().pretty().count()
3
    > db.students.find().pretty()
{
    "_id" : ObjectId("61550237246358961f04babc"),
        "name" : "Michael Jordan",
            "home_state" : "North Carolina",
                "lucky_number" : 23,
                    "birthday" : {
        "month" : 1,
            "day" : 28,
                "year" : 1965
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "basketball"
    ]
}
{
    "_id" : ObjectId("615502c9246358961f04babe"),
        "name" : "Bill Gates",
            "home_state" : "Washington",
                "lucky_number" : 13,
                    "birthday" : {
        "month" : 10,
            "day" : 2,
                "year" : 1958
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "Microsoft"
    ]
}
{
    "_id" : ObjectId("615502fa246358961f04babf"),
        "name" : "Billy Bob",
            "home_state" : "Florida",
                "lucky_number" : 80,
                    "birthday" : {
        "month" : 7,
            "day" : 8,
                "year" : 1974
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ]
}
> db.students.remove({ lucky_number: { $gt: 5 } }, true)
WriteResult({ "nRemoved": 1 })
    > db.students.updateMany({}, { $set: { number_of_belts: 0 } })
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }
> db.students.find().pretty()
{
    "_id" : ObjectId("615502c9246358961f04babe"),
        "name" : "Bill Gates",
            "home_state" : "Washington",
                "lucky_number" : 13,
                    "birthday" : {
        "month" : 10,
            "day" : 2,
                "year" : 1958
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "Microsoft"
    ],
        "number_of_belts" : 0
}
{
    "_id" : ObjectId("615502fa246358961f04babf"),
        "name" : "Billy Bob",
            "home_state" : "Florida",
                "lucky_number" : 80,
                    "birthday" : {
        "month" : 7,
            "day" : 8,
                "year" : 1974
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ],
        "number_of_belts" : 0
}
> db.students.updateMany({ home_state: 'Washington' }, { $inc: { number_of_belts: 1 } })
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.students.find().pretty()
{
    "_id" : ObjectId("615502c9246358961f04babe"),
        "name" : "Bill Gates",
            "home_state" : "Washington",
                "lucky_number" : 13,
                    "birthday" : {
        "month" : 10,
            "day" : 2,
                "year" : 1958
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "Microsoft"
    ],
        "number_of_belts" : 1
}
{
    "_id" : ObjectId("615502fa246358961f04babf"),
        "name" : "Billy Bob",
            "home_state" : "Florida",
                "lucky_number" : 80,
                    "birthday" : {
        "month" : 7,
            "day" : 8,
                "year" : 1974
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ],
        "number_of_belts" : 0
}
> db.students.updateMany({}, { $rename: { 'number_of_belts': 'belts_earned' } })
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }
> db.students.find().pretty()
{
    "_id" : ObjectId("615502c9246358961f04babe"),
        "name" : "Bill Gates",
            "home_state" : "Washington",
                "lucky_number" : 13,
                    "birthday" : {
        "month" : 10,
            "day" : 2,
                "year" : 1958
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "Microsoft"
    ],
        "belts_earned" : 1
}
{
    "_id" : ObjectId("615502fa246358961f04babf"),
        "name" : "Billy Bob",
            "home_state" : "Florida",
                "lucky_number" : 80,
                    "birthday" : {
        "month" : 7,
            "day" : 8,
                "year" : 1974
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ],
        "belts_earned" : 0
}
> db.students.updateMany({}, { $unset: { 'lucky_number': '' } })
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }
> db.students.find().pretty()
{
    "_id" : ObjectId("615502c9246358961f04babe"),
        "name" : "Bill Gates",
            "home_state" : "Washington",
                "birthday" : {
        "month" : 10,
            "day" : 2,
                "year" : 1958
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "Microsoft"
    ],
        "belts_earned" : 1
}
{
    "_id" : ObjectId("615502fa246358961f04babf"),
        "name" : "Billy Bob",
            "home_state" : "Florida",
                "birthday" : {
        "month" : 7,
            "day" : 8,
                "year" : 1974
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ],
        "belts_earned" : 0
}
> Date()
Wed Sep 29 2021 19: 01: 18 GMT - 0600(MDT)
    > db.students.updateMany({}, { $set: { 'updated_on': Date() } })
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }
> Date()
Wed Sep 29 2021 19: 01: 55 GMT - 0600(MDT)
    > db.students.find().pretty()
{
    "_id" : ObjectId("615502c9246358961f04babe"),
        "name" : "Bill Gates",
            "home_state" : "Washington",
                "birthday" : {
        "month" : 10,
            "day" : 2,
                "year" : 1958
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB",
        "Microsoft"
    ],
        "belts_earned" : 1,
            "updated_on" : "Wed Sep 29 2021 19:01:54 GMT-0600 (MDT)"
}
{
    "_id" : ObjectId("615502fa246358961f04babf"),
        "name" : "Billy Bob",
            "home_state" : "Florida",
                "birthday" : {
        "month" : 7,
            "day" : 8,
                "year" : 1974
    },
    "interests" : [
        "coding",
        "brunch",
        "MongoDB"
    ],
        "belts_earned" : 0,
            "updated_on" : "Wed Sep 29 2021 19:01:54 GMT-0600 (MDT)"
}
>