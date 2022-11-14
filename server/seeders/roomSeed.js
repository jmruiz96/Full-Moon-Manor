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
        message: "You find yourself on a set of creaky stairs. The slightest chill breeze meets you from below. And was that a moaning you hear? ",
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
        deathMsg: "You died on the stairs"
    },
    {
        roomName: "First Floor Landing",
        message: "The stairs come to a landing. Shafts of moonlight slant down through the window, highlighting what appear to be footprints left by a pair of heavy boots in the layer of dust on the ancient carpet.",
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
        deathMsg: "You died on the first floor landing"
    },
    {
        roomName: "Study",
        message: "You enter a richly appointed study. All dark leather and wood, the rich smell of cognac hits your nostrils. There's an immense desk facing away from the window, it seems to be so heavy it must have grown up with the house itself. A phonograph plays on a spindly side table, the record skipping and repeating the lyric 'And in the end, we all fall down/We all float down here below'.",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Get out of there",
                    resolutionMessage: "You get a bad vibe in your gut. Careful not to touch any of the furniture or tchotchkes, you slink from the room.",
                    severity: "low"
                },
                {
                    userResponse: "Stand very still",
                    resolutionMessage: "You stand still as a statue, your heartbeat slows. The music starts to swell and the lights pulse. Suddenly, the phonograph bursts into green flame and you think you hear a faint screaming from the flames. A spark lands on your forehead, you bat it away, but not before it singes you. You notice in the mirror on the wall that it has left a strange looping scar.",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate the phonograph",
                    resolutionMessage: "You try to lift the needle on the phonograph and a voice crackles from the horn 'Nuh uh uh, no touchie!' A sharp burst of electricity shocks your hand leaving your whole arm numb.",
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
        deathMsg: "You died in the study as the smell of burnt hair instensifies."
    },
    {
        roomName: "Game Room",
        message: "A menagerie of animal busts stare down at you from the walls, an almost unbelievable number packing every available inch of wall space. Beasts both great and small and some that you can't quite identify, they give the air of unknown worlds and deep forbidden places. You notice a bar cart laden with liquor bottles, including the Scotch you remember your grandfather always had on hand.",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "I'm good",
                    resolutionMessage: "You don't want one bit of those beasties. You head through to the next room.",
                    severity: "low"
                },
                {
                    userResponse: "Take a closer look at an animal",
                    resolutionMessage: "You approach one of the animals you don't recognize on the wall. It resembles a small deer with twisting ebony antlers, but its fur has a greenish hue. You look closer and see a mosaic of what appear to be teeny tiny leaves covering the creature. As you lean in, a powder coughs out of the creature's nose and covers your face thoroughly. You manage to wipe it all away quickly, but you're left with a dry cough as you move from the room.",
                    severity: "medium"
                },
                {
                    userResponse: "Take a sip of Scotch",
                    resolutionMessage: "You cautiously open the bottle and are greeted by the familiar scent of your grandfather. You take a small sip and feel the liquor's warmth pass through your cells. But no sooner have you swallowed than the bottle and its contents dissolve into nothingness. You blink, look around you, and feel the stare of the assembled animals press down on you.",
                    severity: "low"
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
        message: "You walk out onto a patio paved hith heavy stone. There is a set of wrought-iron patio furniture: table, chairs, chaise lounge. You also see a self-standing hammock rolled up in the corner. Tall, thick shrubs stand above a low stone border wall bordering all sides except for one: a break in the wall with a sheer drop-off to a roaring river below. You peer over the edge, vertigo quickly washing over you.",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Get the heck out of there",
                    resolutionMessage: "You step back from the edge, a bit too quickly! A loose paving stone gives way under your foot, sending a rain of stone and rubble down into the river. You fall hard on your tailbone but manage to catch yourself before falling to a watery death.",
                    severity: "medium"
                },
                {
                    userResponse: "Try to get through the shrubs",
                    resolutionMessage: "You look for a gap in the shrubs you might be able to crawl through, but they prove to be nigh impassable. As a matter of fact, each place you try to exploit seems to grow back even thicker.",
                    severity: "low"
                },
                {
                    userResponse: "Call for help",
                    resolutionMessage: "You yell over the side of the cliff for help, you see twinkling lights in the distance. Maybe those are houses where someone might hear your cries. Alas, your calls are lost in the roar of the river below. The feelings of isolation and desperation deepen in your heart.",
                    severity: "low"
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
        deathMsg: "You died on the patio as the moon smiled down from above."
    },
    {
        roomName: "Sunroom",
        message: "You step into the sunroom. Cheap wicker furniture surrounds a low glass-topped coffee table, also in wicker. A deck of cards lies on the table, scattered. Whoever was playing seems to have left in a hurry. Curiously, a pile of wet towels, about as high as your waist, sits next to the door on your right.",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Take a closer look at the towels",
                    resolutionMessage: "You investigate the tower of towels more closely to find that they seem to be soaked in some kind of alcohol, the sharp scent is overpowering and makes your eyes water.",
                    severity: "medium"
                },
                {
                    userResponse: "Take a closer look at the cards",
                    resolutionMessage: "You see someone was playing five card draw and had just laid down a winning hand.",
                    severity: "low"
                },
                {
                    userResponse: "Leave the room",
                    resolutionMessage: "The plasticness of it all skeeves you out, you swiftly exit the room.",
                    severity: "medium"
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
        message: "You find yourself in a backyard graveyard, speckled with old, crumbling headstones and swathed in a low fog. The entire yard is ringed in 12ft high iron fences with sharp spikes along the top. You see a wheelbarrow among the headstones with a shovel leaning against it.",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Investigate the wheelbarrow",
                    resolutionMessage: "You approach the wheelbarrow, wading through fog. You see it is filled with dirt, freshly excavated. You grasp the handle of the shovel and attempt to lift it, but you find you can not get it to budge. No matter how hard you try. The shovel does not move, as if it weighed a thousand pounds.",
                    severity: "low"
                },
                {
                    userResponse: "Read the headstones",
                    resolutionMessage: "You look at the headstone nearest you to see what it says. It simply reads 'I'm sorry' which chills you to your very bone.",
                    severity: "medium"
                },
                {
                    userResponse: "Investigate the fence",
                    resolutionMessage: "The fence is far too high to climb. And it appears to have rusted thoroughly. No breaks or imperfections either. It's just as fence as fence gets.",
                    severity: "low"
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
        deathMsg: "You died in the graveyard with fear in your heart."
    },
    {
        roomName: "Dining Room",
        message: "You enter the dining room and find a grand, long dining table made from heavy wood. This is unsurprising. But that table is absolutely loaded with spoons of various sizes and materials. This is more suprising.",
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
        message: "In the living room, you find a very comfortable-looing sofa in front of a roaring fireplace. There's a pool table as well, with the balls arranged perfectly for the opening break.",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Stand by the fire",
                    resolutionMessage: "You approach the fireplace but find that you cannot feel its warmth. It looks to be as real a fire as you've ever seen but you can simply feel no warmth from it at all.",
                    severity: "low"
                },
                {
                    userResponse: "Shoot some pool",
                    resolutionMessage: "You take up a cue and line up a shot that knocks every single ball into a pocket in perfect order. The pool cue then leaps out of your hand of its own accord and gives you a good whack across the head.",
                    severity: "high"
                },
                {
                    userResponse: "Sit on the sofa",
                    resolutionMessage: "You plop yourself down onto the sofa for a rest, but find it is covered in a sticky substance that you must free yourself from.",
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
        deathMsg: "You died in the living room as the light above the pool table burnt out with a snap."
    },
    {
        roomName: "Foyer",
        message: "In the foyer, you see a beautiful flower arrangement sitting in the center of the room on an elegant wood and glass table.",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Keep on moving",
                    resolutionMessage: "Flowers? No thanks. You move through to the next room.",
                    severity: "low"
                },
                {
                    userResponse: "Give the flowers a sniff",
                    resolutionMessage: "You take a gentle sniff from one of the bulging blooms and are met with a sickly sweet smell. It's familiar but you can't put your finger on why.",
                    severity: "low"
                },
                {
                    userResponse: "Take a look down",
                    resolutionMessage: "You notice the ornate Persian rug you're standing on. It is soft and you feel mesmerized by the design, like it's calling to you.",
                    severity: "low"
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
        deathMsg: "You died in the foyer, sinking deep into the rug."
    },
    {
        roomName: "First Floor Bathroom",
        message: "The first floor bathroom if clean but old fashioned. For some reason, the light bulb is green. It bathes the room with its cool glow.",
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
        deathMsg: "You died in the first floor bathroom, writhing in the green light."
    },
    {
        roomName: "Kitchen",
        message: "The kitchen is large and scrupulously clean. It could easily prepare a meal large enough for a military brigade or a marching band, with room to spare. You see a craggly loaf of sourdough bread sitting on a cutting board on the counter in the center of the room. You can tell by your nose that it's fresh.",
        eventMessage: "2 dudes walk into a bar",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Check out the bread",
                    resolutionMessage: "You slice yourself a slice of bread with a serrated knife that was sitting beside the loaf. After another sniff, you take a bite and find that it's the most delicious bread you've ever tasted. And it didn't even have any butter!",
                    severity: "low"
                },
                {
                    userResponse: "Look in the fridge",
                    resolutionMessage: "You open the hulking refrigerator and find that it's empty except for an egg carton with only one remaining egg. It is also cleaner than seems possible.",
                    severity: "low"
                },
                {
                    userResponse: "Look for a phone",
                    resolutionMessage: "You see an old wall mounted phone by a desk in the corner of the kitchen, you pick it up to try to dial for help but you get no dial tone. All you hear is the sound of someone crying on the other end. You try to talk to them but they can't seem to hear you.",
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
        deathMsg: "You died in the kitchen, dirtying those clean floors. How rude."
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