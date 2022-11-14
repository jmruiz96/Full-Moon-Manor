module.exports = [
    {
        roomName: "Torture Room",
        message: "You open your eyes slowly, groggily becoming aware of your surroundings. Before your vision fully clears the dank and musty smell of stagnate air hits your nostrils. As you peer through the darkness you cannot seem to remember where you are or how you came to be here. There is no light in this room but as you pull yourself up off the ground you can make out a table with what look like cold metal tools strewn about. Spilling out from underneath what you hope to be unlocked doors, you notice a dark liquid creeps from the one ahead of you and to the right a flickering of red light. What direction will you go?",
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
        deathMsg: "You did it! You broke this game, some how you died in the first room!?"
    },
    {
        roomName: "Furnace",
        message: "As you enter this room you are greeted with a blast of heat as you see an open furnace with raging flames. It reeks of burning flesh and hair, the stench overpowers the air and gags you. As you try to cover your face, you know you can run back through the door on the left to the room you woke up in, or across from you there is a door on the right with strange symbols carved into it, and ahead of you there appears to be a plain wooden door.",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Get out of this room",
                    resolutionMessage: "As the heat and stench assail you, you bolt for the next door",
                    severity: "low"
                },
                {
                    userResponse: "Attemt to close the furnace",
                    resolutionMessage: "You muster your strength and move towards the furnace, but as you try and swing the door close fire leaps out and burns you. This firely metal contraption hellish heat rages on...it's time to move on to try and find a way out.",
                    severity: "high"
                },
                {
                    userResponse: "Look for an off valve",
                    resolutionMessage: "As you search for some sort of valve or lever to halt this assault of heat, you begin to feel exhausted and it takes a toll on you. This investagation is to no avail, you need to push foward to hopefully find an exit.",
                    severity: "medium"
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
                userDirection: 'down btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'left',
                nextRoom: 'Torture Room'
            }
        ],
        deathMsg: "You feel the subduing heat clobber you down, you become too exhausted to continue on. Collapsing down to the floor, you stare into the engulfing flames... as you yourself are extinguished."
    },
    {
        roomName: "Wine Cellar",
        message: "As you carefully step into this room, trying to avoid the red liquid sprawled out over the floor you see the walls are lined with what you assume are wine barrels. In the center of the room is a table with a small candle, a half-full chalice, and an open cask slowly leaking wine all over the place, the wine smells spoiled as an abrasive and sharp vinegar scent floods your nose. You walk to the table and know behind you is the door leading to where you awoke, and to the right there is a plain wooden door where you notice a flickering light beneath the door.",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Take a sip from the cup",
                    resolutionMessage: "You pick up the chalice, it is embossed with unsettling images. As you put the cup to your lips the liquid it contains doesn't share the vinegary note of the room. You taste the thick burgundy liquid, it has an eerie metallic taste to it. Your stomach immediately turns and you feel nauseated, you need to get out of here.",
                    severity: "high"
                },
                {
                    userResponse: "Keep moving",
                    resolutionMessage: "As inviting as this room is, you know you have to find a way out and there is no escape in here. On to the next room",
                    severity: "low"
                },
                {
                    userResponse: "Take a sip from the cask",
                    resolutionMessage: "You go to take a sip from the opened cask, as soon as the spoiled wine hits your stomach you feel queasy. You can manage the nausea and it is time to move on. ",
                    severity: "medium"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'up btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'right',
                nextRoom: 'Store Room'
            },
            {
                userDirection: 'down',
                nextRoom: 'Torture Room'
            },
            {
                userDirection: 'left btn disabled',
                nextRoom: '#'
            },
        ],
        deathMsg: "As you gulp down the red liquid, the room begins to spin and your vison blurs. You fall foward, knocking over the tabel and everything on it. Just before you slip out of consciousness, you hear the a faint splash of footsteps against the wet floor..."
    },
    {
        roomName: "Store Room",
        message: "Upon opening this door you find a room with a dangling lightbulb which pulses with a dim light that illuminates the shadows. As you move through the room this blinking light reveals empty cages and shelves lined with jars full of oddities in greenish solution. You hear the skittering of many small feet dart along a wall. Behind you is a door with a reddish glow gleaming through the cracks around it, to the left is a door where there is some red liquid seeping out from below, and on the right seems to be a small metal door. ",
        direction: [
            {
                userDirection: 'up btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'right',
                nextRoom: 'Elevator'
            },
            {
                userDirection: 'down',
                nextRoom: 'Furnace'
            },
            {
                userDirection: 'left',
                nextRoom: 'Wine Cellar'
            },
        ],
        deathMsg: "You died in the store room, which is pretty impressive due to there not being an event in here..."
    },
    {
        roomName: "Crypt",
        message: "You slink past this door with strange symbols carved into only to find a room illuminated by a small window with moonlight pouring through it. There are alcoves indented and spaced even along all the walls containing urns and reliquaries. Beneath the high window lies an built in altar with a long stone coffin atop it. To the left is the door with a red flickering glow emanating from bottom, and ahead of you is the small metal door. Wait, was there a sound that came from the coffin?",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Try and open the coffin",
                    resolutionMessage: "You need to know if something is rattling around inside this stone coffin. You use all of your strength to try and push the stone lid off and before its fully a foul gas creeps outs and open a boney hand grabs your wrist and cuts into it. You pull back and sprint for the door",
                    severity: "high"
                },
                {
                    userResponse: "Reach for remains in the wall",
                    resolutionMessage: "As you go to grab one of the containers in the wall, it falls out of its place in the wall and shatters, shooting human remains across the floor. You get a whiff of something rank and begin to cough and choke. You have to get out of here before it's too late",
                    severity: "high"
                },
                {
                    userResponse: "Ignore that and push on",
                    resolutionMessage: "You are pretty sure you actully-didn't-hear anything and want to push on to the next room",
                    severity: "low"
                }
                ]
            }
        ],
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Elevator'
            },
            {
                userDirection: 'right btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'down btn disabled',
                nextRoom: '#',
            },
            {
                userDirection: 'left',
                nextRoom: 'Furnace'
            },
        ],
        deathMsg: "You cannot stop choking and coughing whatever was released into the air is burning in you lungs, you hear the hard thud of a heavy stone lid hitting the floor. Through your own tears you can bearly see a shambling and rotting outline of a being that drags you into the stoney casket and everything goes dark... "
    },
    {
        roomName: "Elevator",
        message: "This is the elevator",
        direction: [
            {
                userDirection: 'up btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'right',
                nextRoom: 'First Floor Stairs'
            },
            {
                userDirection: 'down',
                nextRoom: 'Crypt'
            },
            {
                userDirection: 'left',
                nextRoom: 'Store Room'
            }
        ],
        deathMsg: "You died in the elevator, it goes up or down straight to an afterlife"
    },
    {
        roomName: "First Floor Stairs",
        message: "This is the first floor stairs",
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Foyer'
            },
            {
                userDirection: 'right btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'down',
                nextRoom: 'First Floor Landing'
            },
            {
                userDirection: 'left',
                nextRoom: 'Elevator'
            },
        ],
        deathMsg: "You died in the stairs"
    },
    {
        roomName: "First Floor Landing",
        message: "This is the first floor landing",
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'First Floor Stairs'
            },
            {
                userDirection: 'right',
                nextRoom: 'Study'
            },
            {
                userDirection: 'down',
                nextRoom: 'Sunroom'
            },
            {
                userDirection: 'left btn disabled',
                nextRoom: '#'
            }
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
                userDirection: 'up btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'right btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'down',
                nextRoom: 'Game Room'
            },
            {
                userDirection: 'left',
                nextRoom: 'First Floor Landing'
            },
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
                userDirection: 'up',
                nextRoom: 'Study'
            },
            {
                userDirection: 'right btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'down',
                nextRoom: 'Patio'
            },
            {
                userDirection: 'left',
                nextRoom: 'First Floor Landing'
            },
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
                userDirection: 'up',
                nextRoom: 'Game Room'
            },
            {
                userDirection: 'right btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'down btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'left',
                nextRoom: 'Sunroom'
            },
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
                userDirection: 'up',
                nextRoom: 'First Floor Landing'
            },
            {
                userDirection: 'right',
                nextRoom: 'Patio'
            },
            {
                userDirection: 'down btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'left',
                nextRoom: 'Graveyard'
            },
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
                userDirection: 'up',
                nextRoom: 'Dining Room'
            },
            {
                userDirection: 'right',
                nextRoom: 'Sunroom'
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
        deathMsg: "You died in the graveyard"
    },
    {
        roomName: "Dining Room",
        message: "This is the dining room",
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Living Room'
            },
            {
                userDirection: 'right btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'down',
                nextRoom: 'Graveyard'
            },
            {
                userDirection: 'left',
                nextRoom: 'Kitchen'
            },
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
                userDirection: 'up btn disabled',
                nextRoom: '#'
              },
            {
                userDirection: 'right',
                nextRoom: 'Foyer'
            },
            {
                userDirection: 'down',
                nextRoom: 'Dining Room'
            },
            {
                userDirection: 'left',
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
                userDirection: 'up btn disabled',
                nextRoom: '#'
              },
              {
                userDirection: 'right btn disabled',
                nextRoom: '#'
              },
              {
                userDirection: 'down',
                nextRoom: 'First Floor Stairs'
            },
            {
                userDirection: 'left',
                nextRoom: 'Living Room'
            }
           
        ],
        deathMsg: "You died in the foyer"
    },
    {
        roomName: "First Floor Bathroom",
        message: "This is the first floor bathroom",
        direction: [
            {
                userDirection: 'up btn disabled',
                nextRoom: '#'
              },
            {
                userDirection: 'right',
                nextRoom: 'Living Room'
            },
            {
                userDirection: 'down',
                nextRoom: 'Kitchen'
            },
            {
                userDirection: 'left btn disabled',
                nextRoom: '#'
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
                userDirection: 'up',
                nextRoom: 'First Floor Bathroom'
            },
            {
                userDirection: 'right',
                nextRoom: 'Dining Room'
            },
            {
                userDirection: 'down btn disabled',
                nextRoom: '#'
            },
            {
                userDirection: 'left',
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
                userDirection: 'up',
                nextRoom: 'Bedroom 1'
            },
            {
                userDirection: 'right',
                nextRoom: 'Kitchen'
            },
            {
                userDirection: 'down',
                nextRoom: 'Laboratory'
            },
            {
                userDirection: 'left',
                nextRoom: 'Creaky Hallway'
            },
          
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
                userDirection: 'up btn disabled',
                nextRoom: '#'
              },
              {
                userDirection: 'right btn disabled',
                nextRoom: '#'
              },
              {
                userDirection: 'down',
                nextRoom: 'Second Floor Stairs'
            },
            {
                userDirection: 'left',
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
                userDirection: 'up btn disabled',
                nextRoom: '#'
              },
            {
                userDirection: 'right',
                nextRoom: 'Bedroom 1'
            },
            {
                userDirection: 'down',
                nextRoom: 'Creaky Hallway'
            },
            {
                userDirection: 'left',
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
                userDirection: 'up',
                nextRoom: 'Safe Exit'
              },
              {
                userDirection: 'right',
                nextRoom: 'Second Floor Bathroom'
            },
            {
                userDirection: 'down',
                nextRoom: 'Pentagram Chamber'
            },
            {
                userDirection: 'left btn disabled',
                nextRoom: '#'
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
                userDirection: 'up',
                nextRoom: 'Second Floor Bathroom'
            },
            {
                userDirection: 'right',
                nextRoom: 'Second Floor Stairs'
            },
            {
                userDirection: 'down',
                nextRoom: 'Master Bedroom'
            },
            {
                userDirection: 'left',
                nextRoom: 'Pentagram Chamber'
            },
           
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
                userDirection: 'up',
                nextRoom: 'Bedroom 2'
            },
            {
                userDirection: 'right',
                nextRoom: 'Creaky Hallway'
            },
            {
                userDirection: 'down',
                nextRoom: 'Attic'
            },
            {
                userDirection: 'left btn disabled',
                nextRoom: '#'
              }
            
        ],
        deathMsg: "You died in the pentagram chamber"
    },
    {
        roomName: "Laboratory",
        message: "This is the laboratory",
        direction: [
            {
                userDirection: 'up',
                nextRoom: 'Second Floor Stairs'
            },
            {
                userDirection: 'right btn disabled',
                nextRoom: '#'
              },
            {
                userDirection: 'down btn disabled',
                nextRoom: '#'
              },
            {
                userDirection: 'left',
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
                userDirection: 'up',
                nextRoom: 'Creaky Hallway'
            },
            {
                userDirection: 'right',
                nextRoom: 'Laboratory'
            },
            {
                userDirection: 'down',
                nextRoom: 'Dangerous Exit'
            },
            {
                userDirection: 'left',
                nextRoom: 'Attic'
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
        deathMsg: "You died in the attic."
    },
    {
        roomName: "Safe Exit",
        message: "You exited safely!",
    },
    {
        roomName: "Dangerous Exit",
        message: "You exited but were injured",
        deathMsg: "You died while attempting to exit"
    },
]