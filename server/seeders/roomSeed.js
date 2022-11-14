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
                userDirection: 'down btn disabled',
                nextRoom: '#'
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
        deathMsg: "You died in the wine cellar"
    },
    {
        roomName: "Store Room",
        message: "This is the store room",
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
        deathMsg: "You died in the crypt"
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
        deathMsg: "You died in the elevator"
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
        message: "You arrive at the top of the stairs with a long dark hallway in front of you with 2 doors to your immediate right and left. You notice that the door to your left is a large metal door with a sign on it that says keep out, you can smell a mixture of what seems to be bleach and ammonia coming out of it. The right door is much more mundane, its just a regular wooden door leading to a bedroom.",
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
        message: "You open the wooden door leading into a bedroom filled to the brim with dolls and plushies. The dolls dead eyes all seem to fixate on you as you come into the room the only light coming from the moonlight seeping through the window. A red headed doll wearing a frilly black goth outfit and heavy black makeup the size of a child is sitting on the bed making eye contact with you. There is another door to the right of the room, the sound of waterdrops hitting a surface can be heard in the distance. You can hear a faint voice singing a lullaby in the room.",
    
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You immediately get the hell out of that creepy room.",
                    severity: "low"
                },
                {
                    userResponse: "Focus",
                    resolutionMessage: "You focus on where the lullaby is coming from, and it seems to be originating from the main doll on the bed. The lullaby gets louder, and you seem to get sleepier the longer you stand there.",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You move closer to the doll on the bed, the closer you get the more lifelike she seems. By the time you reach her she had become a full-size person singing to you while pulling you closer to the bed.",
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
        deathMsg: "You feel yourself slip into a deep sleep as the lullaby gets louder and louder. When you awake on the bed you notice that you've been turned into a doll forced to add others to the collection forever."
    },
    {
        roomName: "Second Floor Bathroom",
        message: "You open the door to see a dimly lit bathroom, a steady stream of drops fall from the faucet head into a pool of water in the tub. Above the sink is a broken mirror reflecting the downtrodden room. A toilet sits in its own little corner of the room, not much out of the ordinary in here except for how creepy it looks in here. On the other side of the room, you see a door leading to what seems to be another bedroom. Another door leading back into the hallway can be seen next to the sink. The ceiling light flickers as if signaling you to move on from this dreary place.",
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
        message: "You open the door into an inviting bedroom, much nicer and cleaner than all the rest of the rooms in this haunted home. Moonlight streams from the open window to the right of you, a light breeze can be felt coming from it. To the left you see a door with an eerie red light coming from the other side. On the other side of the room, you spot an open closet with some clothes in it. You hear something trying to open the door behind you.",
    
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You don't stick around to find out what made the noise",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You decide the best thing to do is hide in the closet, somehow while you were running in there you stepped on a Lego",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You bravely decide to figure out what made that sound, it was a monster so scary that your mind couldn't comprehend it",
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
        deathMsg: "You were found by one of the horrors of this house right in front of the exit. You died in the glow of the moonlight regretting your life decisions."
    },
    {
        roomName: "Creaky Hallway",
        message: "You find yourself in a long dark hallway, every step you take creaks the old wooden floors. At the end of the hallway is a door with an eerie red glow coming from behind it, on the opposite end are the stairs to the first floor. Two doors flank either side of the hallway, one is large and ornate with weird symbols written on it. The other is a regular wooden door but you can hear the faint sound of waterdrops coming from the other side of it. A sudden creek of the floorboards startles you into action.",
    
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "You use the one tactic that never fails running, too bad you trip over something on your way out and hit your head",
                    severity: "high"
                },
                {
                    userResponse: "Creep",
                    resolutionMessage: "You decide to take your time and move slowly since the floorboards would give you away if you made to much noise",
                    severity: "low"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You decide to get your Scooby doo fix and investigate the noise. Turns out it was a black cat, now you got a couple years of bad luck",
                    severity: "medium"
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
        message: "You find yourself in what seems to be a ritual chamber, an alter situated in the middle of the room has a large pentagram glowing on it. The pentagram radiates with a red glow, and you feel drawn to it like something is calling you to come closer. The walls of this place seem to be made out of stone with glowing symbols scrawled all over the place. There are 3 doors in this room, one leading to the hallway. Another going to the bedroom and the last towards a dark room with a ladder leading to the attic. On the pedestal next to the alter is an open book with weird symbols all over it.",
    
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "The smart decision here is to leave immediately which you do in haste",
                    severity: "low"
                },
                {
                    userResponse: "Read",
                    resolutionMessage: "You pick up the book looking through the pages to see if you can understand something. The book flips to a page with weird glowing symbols and you recite the words of some unknown language not fully in control of yourself. The whole house rumbles as you finish the incantation, the pentagram flashes blinding you and tossing you to the wall. Turns out you just tried summoning Cthulhu welcome to the cult",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "You get closer to the pentagram feeling the power flowing through it and into you. Before you realize it your already in the middle of the alter. You can feel your strength leaving you as you crumble to the floor",
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
        deathMsg: "Your life force was sucked into the pentagram as you hear weird chants in the background. Turns out you were the latest sacrifice to summon a cults dark god, as you lay dying someone thanks you for your service as you hear the screams of the masses coming from outside"
    },
    {
        roomName: "Laboratory",
        message: "You find yourself in a lab of sorts. It looks like something out of Frankenstein in here. The smell of bleach and ammonia wafts through the air like somebody had just thoroughly cleaned the whole room with chemicals. Lab coats hang on hooks alongside goggles, gloves, and what looks like a hazmat suit. This place looks like if Dexter’s Lab was filmed in a dilapidated house. You notice a large metal door that has a sign on it that says please clean yourself before leaving is on the other side of the room. The second door has an exit sign with stairs on it, clearly this leads to the stairs.",
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
        message: "The large room opens before you, a large bed sits in the middle of the room. In front of the bed is a dresser that has a TV sitting on top of it. There's nothing but static on the tv but the remote is resting right next to it. A door to the creepy attic is on one side of the room, on the other is a metal door that says lab on it. The last door leads to the hallway, and there's a broken window with a branch in front of it.",

        event: [
            {
                eventOutcome: [{
                    userResponse: "Turn off the TV",
                    resolutionMessage: "You take the remote and hit the power button which turns off the TV.",
                    severity: "low"
                },
                {
                    userResponse: "Look out the window",
                    resolutionMessage: "You get closer to the window and notice that the branch is close enough to jump to. You cut yourself on the broken glass",
                    severity: "medium"
                },
                {
                    userResponse: "Watch TV",
                    resolutionMessage: "You take the remote and see if you can change the channel but every time you flip through the channels a clear picture of a women seems to get closer and closer. Eventually the women climbs out of the tv and you feel your consciousness fading",
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
        message: "You climb up the ladder to the attic and notice that the place is filled with lifelike sculptures. Each one is extremely detailed and they all have clothes from different time periods. They all have this look of extreme terror on their faces like whatever they saw scared them into this state. Only too late do you notice that your body had become stiff and your breathing heavy. You turn around to see a statue you didnt see when you came in direclty behind you like it was following you. Too late do you realize staring at it turned you to stone too",
        
        event: [
            {
                eventOutcome: [{
                    userResponse: "Run",
                    resolutionMessage: "There's no running from this",
                    severity: "low"
                },
                {
                    userResponse: "Hide",
                    resolutionMessage: "You can't hide",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate",
                    resolutionMessage: "Your stuck in place",
                    severity: "high"
                }
                ]
            }
        ],
        deathMsg: "Your trapped here forever."
    },
    {
        roomName: "Safe Exit",
        message: "You exit the house through the window and climb down to the sidewalk your safe.",
    },
    {
        roomName: "Dangerous Exit",
        message: "You jumped out of the window onto the branch, which then fell with you on it.",
        deathMsg: "The branch crushed you"
    },
]