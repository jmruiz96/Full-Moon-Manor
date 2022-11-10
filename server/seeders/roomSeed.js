module.exports = [
    {
        roomName: "Torture Room",
        message: "This is the torture room",
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Wine Cellar'
            },
            {
                userDirection: 'right',
                nextRoom: 'Furnace'
            },
            {
                userDirection: 'down btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'left btn disabled',
                nextRoom: '#'
            }
        ],
        deathMsg: "You died in the torture room"
    },
    {
        roomName: "Furnace",
        message: "This is the furnace",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Store Room'
            },
            {
                userDirection: 'right',
                nextRoom: 'Crypt'
            },
            {
                userDirection: 'down',
                nextRoom: ''
            },
            {
                userDirection: 'left',
                nextRoom: 'Torture Room'
            }
        ],
        deathMsg: "You died in the furnace"
    },
    {
        roomName: "Wine Cellar",
        message: "This is the wine cellar",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'ArrowRight',
                nextRoom: 'Store Room'
            },
            {
                userDirection: 'ArroDown',
                nextRoom: 'Torture Room'
            }
        ],
        deathMsg: "You died in the wine cellar"
    },
    {
        roomName: "Store Room",
        message: "This is the store room",
        direction: [
            {
                userDirection: 'ArrowRight',
                nextRoom: 'Elevator'
            },
            {
                userDirection: 'ArrowLeft',
                nextRoom: 'Wine Cellar'
            },
            {
                userDirection: 'ArrowDown',
                nextRoom: 'Furnace'
            }
        ],
        deathMsg: "You died in the store room"
    },
    {
        roomName: "Crypt",
        message: "This is the crypt",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'ArrowLeft',
                nextRoom: 'Furnace'
            },
            {
                userDirection: 'ArrowUp',
                nextRoom: 'Elevator'
            }
        ],
        deathMsg: "You died in the crypt"
    },
    {
        roomName: "Elevator",
        message: "This is the elevator",
        direction: [
            {
                userDirection: 'ArrowRight',
                nextRoom: 'First Floor Stairs'
            },
            {
                userDirection: 'ArrowDown',
                nextRoom: 'Crypt'
            },
            {
                userDirection: 'ArrowLeft',
                nextRoom: 'Store Room'
            }
        ],
        deathMsg: "You died in the elevator"
    },
    {
        roomName: "First Floor Stairs",
        message: "This is the first floor stairs",
        direction: [
            {
                userDirection: 'ArrowLeft',
                nextRoom: 'Elevator'
            },
            {
                userDirection: 'ArrowDown',
                nextRoom: 'First Floor Landing'
            },
            {
                userDirection: 'ArrowUp',
                nextRoom: 'Foyer'
            }
        ],
        deathMsg: "You died in the stairs"
    },
    {
        roomName: "First Floor Landing",
        message: "This is the first floor landing",
        direction: [
            {
                userDirection: 'ArrowUp',
                nextRoom: 'First Floor Stairs'
            },
            {
                userDirection: 'ArrowRight',
                nextRoom: 'Study'
            },
            {
                userDirection: 'ArrowDown',
                nextRoom: 'Sunroom'
            },
        ],
        deathMsg: "You died in the first floor landing"
    },
    {
        roomName: "Study",
        message: "This is the study",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'ArrowLeft',
                nextRoom: 'First Floor Landing'
            },
            {
                userDirection: 'ArrowDown',
                nextRoom: 'Game Room'
            }
        ],
        deathMsg: "You died in the study"
    },
    {
        roomName: "Game Room",
        message: "This is the game room",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'ArrowLeft',
                nextRoom: 'First Floor Landing'
            },
            {
                userDirection: 'ArrowUp',
                nextRoom: 'Study'
            },
            {
                userDirection: 'ArrowDown',
                nextRoom: 'Patio'
            }
        ],
        deathMsg: "You died in the game room"
    },
    {
        roomName: "Patio",
        message: "This is the patio",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'ArrowLeft',
                nextRoom: 'Sunroom'
            },
            {
                userDirection: 'ArrowUp',
                nextRoom: 'Game Room'
            }
        ],
        deathMsg: "You died in the patio"
    },
    {
        roomName: "Sunroom",
        message: "This is the sunroom",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'ArrowLeft',
                nextRoom: 'Graveyard'
            },
            {
                userDirection: 'ArrowUp',
                nextRoom: 'First Floor Landing'
            },
            {
                userDirection: 'ArrowRight',
                nextRoom: 'Patio'
            }
        ],
        deathMsg: "You died in the sunroom"
    },
    {
        roomName: "Graveyard",
        message: "This is the graveyard",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'ArrowRight',
                nextRoom: 'Sunroom'
            },
            {
                userDirection: 'ArrowUp',
                nextRoom: 'Dining Room'
            }
        ],
        deathMsg: "You died in the graveyard"
    },
    {
        roomName: "Dining Room",
        message: "This is the dining room",
        direction: [
            {
                userDirection: 'ArrowLeft',
                nextRoom: 'Kitchen'
            },
            {
                userDirection: 'ArrowUp',
                nextRoom: 'Living Room'
            },
            {
                userDirection: 'ArrowDown',
                nextRoom: 'Graveyard'
            }
        ],
        deathMsg: "You died in the dining room"
    },
    {
        roomName: "Living Room",
        message: "This is the living room",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'ArrowRight',
                nextRoom: 'Foyer'
            },
            {
                userDirection: 'ArrowDown',
                nextRoom: 'Dining Room'
            },
            {
                userDirection: 'ArrowLeft',
                nextRoom: 'First Floor Bathroom'
            }
        ],
        deathMsg: "You died in the living room"
    },
    {
        roomName: "Foyer",
        message: "This is the foyer",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'ArrowLeft',
                nextRoom: 'Living Room'
            },
            {
                userDirection: 'ArrowDown',
                nextRoom: 'First Floor Stairs'
            }
        ],
        deathMsg: "You died in the foyer"
    },
    {
        roomName: "First Floor Bathroom",
        message: "This is the first floor bathroom",
        direction: [
            {
                userDirection: 'ArrowRight',
                nextRoom: 'Living Room'
            },
            {
                userDirection: 'ArrowDown',
                nextRoom: 'Kitchen'
            }
        ],
        deathMsg: "You died in the first floor bathroom"
    },
    {
        roomName: "Kitchen",
        message: "This is the kitchen",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'ArrowRight',
                nextRoom: 'Dining Room'
            },
            {
                userDirection: 'ArrowUp',
                nextRoom: 'First Floor Bathroom'
            },
            {
                userDirection: 'ArrowLeft',
                nextRoom: 'Second Floor Stairs'
            }
        ],
        deathMsg: "You died in the kitchen"
    },
    {
        roomName: "Second Floor Stairs",
        message: "This is the second floor stairs",
        direction: [
            {
                userDirection: 'ArrowRight',
                nextRoom: 'Kitchen'
            },
            {
                userDirection: 'ArrowDown',
                nextRoom: 'Laboratory'
            },
            {
                userDirection: 'ArrowLeft',
                nextRoom: 'Creaky Hallway'
            },
            {
                userDirection: 'ArrowUp',
                nextRoom: 'Bedroom 1'
            }
        ],
        deathMsg: "You died in the second floor stairs"
    },
    {
        roomName: "Bedroom 1",
        message: "This is the bedroom 1",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'ArrowDown',
                nextRoom: 'Second Floor Stairs'
            },
            {
                userDirection: 'ArrowLeft',
                nextRoom: 'Second Floor Bathroom'
            }
        ],
        deathMsg: "You died in the bedroom 1"
    },
    {
        roomName: "Second Floor Bathroom",
        message: "This is the second floor bathroom",
        direction: [
            {
                userDirection: 'ArrowRight',
                nextRoom: 'Bedroom 1'
            },
            {
                userDirection: 'ArrowDown',
                nextRoom: 'Creaky Hallway'
            },
            {
                userDirection: 'ArrowLeft',
                nextRoom: 'Bedroom 2'
            }
        ],
        deathMsg: "You died in the second floor bathroom"
    },
    {
        roomName: "Bedroom 2",
        message: "This is the bedroom 2",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'ArrowRight',
                nextRoom: 'Second Floor Bathroom'
            },
            {
                userDirection: 'ArrowDown',
                nextRoom: 'Pentagram Chamber'
            },
            {
                userDirection: 'ArrowUp',
                nextRoom: 'Safe Exit'
            }
        ],
        deathMsg: "You died in the bedroom 2"
    },
    {
        roomName: "Creaky Hallway",
        message: "This is the creaky hallway",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'ArrowRight',
                nextRoom: 'Second Floor Stairs'
            },
            {
                userDirection: 'ArrowDown',
                nextRoom: 'Master Bedroom'
            },
            {
                userDirection: 'ArrowLeft',
                nextRoom: 'Pentagram Chamber'
            },
            {
                userDirection: 'ArrowUp',
                nextRoom: 'Second Floor Bathroom'
            }
        ],
        deathMsg: "You died in the creaky hallway"
    },
    {
        roomName: "Pentagram Chamber",
        message: "This is the pentagram chamber",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'ArrowRight',
                nextRoom: 'Creaky Hallway'
            },
            {
                userDirection: 'ArrowDown',
                nextRoom: 'Attic'
            },
            {
                userDirection: 'ArrowUp',
                nextRoom: 'Bedroom 2'
            }
        ],
        deathMsg: "You died in the pentagram chamber"
    },
    {
        roomName: "Laboratory",
        message: "This is the laboratory",
        direction: [
            {
                userDirection: 'ArrowUp',
                nextRoom: 'Second Floor Stairs'
            },
            {
                userDirection: 'ArrowLeft',
                nextRoom: 'Master Bedroom'
            }
        ],
        deathMsg: "You died in the laboratory"
    },
    {
        roomName: "Master Bedroom",
        message: "This is the master bedroom",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'ArrowRight',
                nextRoom: 'Laboratory'
            },
            {
                userDirection: 'ArrowDown',
                nextRoom: 'Dangerous Exit'
            },
            {
                userDirection: 'ArrowLeft',
                nextRoom: 'Attic'
            },
            {
                userDirection: 'ArrowUp',
                nextRoom: 'Creaky Hallway'
            }
        ],
        deathMsg: "You died in the master bedroom"
    },
    {
        roomName: "Attic",
        message: "This is the attic",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You ran",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You hid",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You investigated",
                    severity: "high"
                }
                ]
            }
        ],
        deathMsg: "You died in the living room"
    },
    {
        roomName: "Safe Exit",
        message: "You exited safely!",
    },
    {
        roomName: "Dangerous Exit",
        message: "You exited but were injured",
        eventMessage: "2 dudes walk into a bar",
        deathMsg: "You died while attempting to exit"
    },
]