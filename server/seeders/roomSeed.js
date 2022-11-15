module.exports = [
    {
        roomName: "Torture Room",
        message: "You open your eyes slowly, groggily becoming aware of your surroundings. Before your vision fully clears, the dank and musty smell of stagnant air hits your nostrils. As you peer through the darkness you cannot seem to remember where you are or how you came to be here. There is no light in this room but as you pull yourself up off the ground you can make out a table with what looks like cold metal tools strewn about. Spilling out from underneath what you hope to be unlocked doors, you notice a dark liquid creeping from the one ahead of you and to the right a flickering of red light. What direction will you go?",
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
        deathMsg: "You did it! You broke this game, somehow you died in the first room!?"
    },
    {
        roomName: "Furnace",
        message: "As you enter this room you are greeted with a blast of heat as you see an open furnace with raging flames. It reeks of burning flesh and hair, the stench overpowering the air and gagging you. As you try to cover your face, you know you can run back through the door on the left to the room you woke up in, or across from you there is a door on the right with strange symbols carved into it, and ahead of you there appears to be a plain wooden door.",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Get out of this room",
                    resolutionMessage: "As the heat and stench assail you, you bolt for the next door",
                    severity: "low"
                },
                {
                    userResponse: "Attempt to close the furnace",
                    resolutionMessage: "You muster your strength and move towards the furnace, but as you try and swing the door closed fire leaps out and burns you. The fiery metal contraption's hellish heat rages on...it's time to move on to try and find a way out.",
                    severity: "high"
                },
                {
                    userResponse: "Look for an off valve",
                    resolutionMessage: "As you search for some sort of valve or lever to halt this assault of heat, you begin to feel exhausted and it takes a toll on you. You turn a sqeaky wheel and you think the flames died down a bit, but you need to push forward to hopefully find an exit.",
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
        deathMsg: "You feel the subduing heat clobber you down and become too exhausted to continue on. Collapsing down to the floor, you stare into the engulfing flames... as you yourself are extinguished."
    },
    {
        roomName: "Wine Cellar",
        message: "As you carefully step into this room, trying to avoid the red liquid sprawled out over the floor you see the walls are lined with what you assume are wine barrels. In the center of the room is a table with a small candle, a half-full chalice, and an open cask slowly leaking wine all over the place. The wine smells spoiled as an abrasive and sharp vinegar scent floods your nose. You walk to the table and know behind you is the door leading to where you awoke, and to the right there is a plain wooden door where you notice a flickering light beneath the door.",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Take a sip from the cup",
                    resolutionMessage: "You pick up the chalice, it is embossed with unsettling images. As you put the cup to your lips, the liquid it contains doesn't share the vinegary note of the room. You taste the thick burgundy liquid, it has an eerie metallic taste to it. Your stomach immediately turns and you feel nauseated, you need to get out of here.",
                    severity: "high"
                },
                {
                    userResponse: "Keep moving",
                    resolutionMessage: "As inviting as this room is, you know you have to find a way out and there is no escape in here. On to the next room",
                    severity: "low"
                },
                {
                    userResponse: "Take a sip from the cask",
                    resolutionMessage: "You go to take a sip from the opened cask, and as soon as the spoiled wine hits your stomach you feel queasy. You can manage the nausea and it is time to move on. ",
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
        deathMsg: "As you gulp down the red liquid, the room begins to spin and your vision blurs. You fall forward, knocking over the table and everything on it. Just before you slip out of consciousness, you hear the faint splash of footsteps against the wet floor..."
    },
    {
        roomName: "Store Room",
        message: "Upon opening this door you find a room with a dangling light bulb which pulses with a dim light that illuminates the shadows. As you move through the room this blinking light reveals empty cages and shelves lined with jars full of oddities in a greenish solution. You hear the skittering of many small feet dart along a wall. Behind you is a door with a reddish glow gleaming through the cracks, to the left is a door where there is some red liquid seeping out from below, and on the right seems to be a small metal door. ",
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
        message: "You slink past this door with strange symbols carved into it, only to find a room illuminated by a small window with moonlight pouring through it. There are alcoves indented and spaced even along all the walls containing urns and reliquaries. Beneath the high window lies a built-in altar with a long stone coffin atop it. To the left is the door with a red flickering glow emanating from the bottom, and ahead of you is the small metal door. Wait, was there a sound that came from the coffin?",
        event: [
            {
                eventOutcome: [{
                    userResponse: "Try to open the coffin",
                    resolutionMessage: "You need to know if something is rattling around inside this stone coffin. You use all of your strength to try and push the stone lid off and before it's fully open a foul gas creeps out and a boney hand grabs your wrist and cuts into it. You pull back and sprint for the door",
                    severity: "high"
                },
                {
                    userResponse: "Reach for remains in the wall",
                    resolutionMessage: "As you go to grab one of the containers in the wall, it falls out of its place in the wall and shatters, shooting human remains across the floor. You get a whiff of something rank and begin to cough and choke. You have to get out of here before it's too late",
                    severity: "medium"
                },
                {
                    userResponse: "Ignore that and push on",
                    resolutionMessage: "You are pretty sure you actually didn't hear anything and want to push on to the next room",
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
        deathMsg: "You cannot stop choking and coughing and whatever was released into the air is burning in you lungs. You hear the hard thud of a heavy stone lid hitting the floor. Through your own tears you can barely see a shambling and rotting outline of a being that drags you into the stoney casket and everything goes dark... "
    },
    {
        roomName: "Elevator",
        message: "You enter the room and see what looks like an old elevator with a rickety old gate, is this your way out?! You throw open the gate and try to hit any button to take you away from here. None of the buttons light up. After trying everything you can think of you realize that escaping won't be that easy.  As you take a step out you see behind you the door with strange symbols painted onto it, on your left is a door with a blinking light shining beneath it, and to the right is a door with an arrow pointing up etched into it.",
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
        deathMsg: "You died in the elevator, it goes down straight to... a bad afterlife :("
    },
    {
        roomName: "First Floor Stairs",
        message: "You find yourself on a set of creaky stairs. The slightest chilly breeze meets you from below. And was that a moaning you hear? ",
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
        deathMsg: "You died in the study as the smell of burnt hair intensifies."
    },
    {
        roomName: "Game Room",
        message: "A menagerie of animal busts stare down at you from the walls, an almost unbelievable number packing every available inch of wall space. Beasts both great and small and some that you can't quite identify, they give the air of unknown worlds and deep forbidden places. You notice a bar cart laden with liquor bottles, including the Scotch you remember your grandfather always had on hand.",
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
        deathMsg: "As you cough and hack, you feel the wet walls of your throat start to close together. You grasp your neck as the lights start to fade and sweet, life-giving oxygen leaves you one last time. You die on the floor of the game room with your beastly friends keeping watch over you from above."
    },
    {
        roomName: "Patio",
        message: "You walk out onto a patio paved with heavy stone. There is a set of wrought-iron patio furniture: table, chairs, chaise lounge. You also see a self-standing hammock rolled up in the corner. Tall, thick shrubs stand above a low stone border wall bordering all sides except for one: a break in the wall with a sheer drop-off to a roaring river below. You peer over the edge, vertigo quickly washing over you.",
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
        deathMsg: "You step back from the edge, a bit too quickly! A loose paving stone gives way under your foot, sending a rain of stone and rubble down into the river. You fall hard on your tailbone and another chunk of paving stones give way beneath you. You tumble over the cliff, desperately trying to find purchase with a branch or rock. To no avail, sadly. You fall screaming and die a watery death in the river below."
    },
    {
        roomName: "Sunroom",
        message: "You step into the sunroom. Cheap wicker furniture surrounds a low glass-topped coffee table, also in wicker. A deck of cards lies on the table, scattered. Whoever was playing seems to have left in a hurry. Curiously, a pile of wet towels, about as high as your waist, sits next to the door on your right.",
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
        deathMsg: "You investigate the tower of towels more closely to find that they seem to be soaked in some kind of alcohol, the sharp scent is overpowering and makes you feel light-headed. For some reason, you feel this is a good time to take a nap, just to rest your eyes. As you begin to fall into a slumber, you hear footsteps. This will be your final resting place."
    },
    {
        roomName: "Graveyard",
        message: "You find yourself in a backyard graveyard, speckled with old, crumbling headstones and swathed in a low fog. The entire yard is ringed in 12ft high iron fences with sharp spikes along the top. You see a wheelbarrow among the headstones with a shovel leaning against it.",
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
        message: "You enter the dining room and find a grand, long dining table made from heavy wood. This is unsurprising. But that table is absolutely loaded with spoons of various sizes and materials. This is more surprising.",
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
        message: "In the living room, you find a very comfortable-looking sofa in front of a roaring fireplace. There's a pool table as well, with the balls arranged perfectly for the opening break.",
        
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
        message: "The first floor bathroom is clean but old fashioned. For some reason, the light bulb is green. It bathes the room with its cool glow.",
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
        message: "You open the door into an inviting bedroom, much nicer and cleaner than all the rest of the rooms in this haunted home. Moonlight streams from the open window in front of you, a light breeze can be felt coming from it. Behind you is a door with an eerie red light coming from the other side. On the other side of the room, you spot an open closet with some clothes in it. You hear something trying to open the door to your right.",
    
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
        message: "You find yourself in what seems to be a ritual chamber, an alter situated in the middle of the room has a large pentagram glowing on it. The pentagram radiates with a red glow, and you feel drawn to it like something is calling you to come closer. The walls of this place seem to be made out of stone with glowing symbols scrawled all over the place. There are 3 doors in this room, one leading to the hallway, another going to the bedroom, and behind you a dark room with a ladder leading to the attic. On the pedestal next to the alter is an open book with weird symbols all over it.",
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
        deathMsg: "Your life force was sucked into the pentagram as you hear weird chants in the background. Turns out you were the latest sacrifice to summon a cult's dark god, as you lay dying someone thanks you for your service as you hear the screams of the masses coming from outside"
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
        message: "The large room opens before you, a large bed sits in the middle of the room. In front of the bed is a dresser that has a TV sitting on top of it. There's nothing but static on the tv but the remote is resting right next to it. A door to the creepy attic is to your left, on the other is a metal door that says \'Lab\' on it. The last door leads to the hallway, and there's a broken window with a branch in front of it.",
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
                    resolutionMessage: "You take the remote and see if you can change the channel but every time you flip through the channels a clear picture of a woman seems to get closer and closer. Eventually the woman climbs out of the tv and you feel your consciousness fading",
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
        deathMsg: "In a panic, you try to jump out of the window, reaching for the branch that was seemingly within your grasp. Your fingertips touch the bark just long enough to feel the hard bough before it breaks and you plummet to the ground. The last thing you see before your vision goes dark is the full moon."
    },
    {
        roomName: "Attic",
        message: "You climb up the ladder to the attic and notice that the place is filled with lifelike sculptures. Each one is extremely detailed and they all have clothes from different time periods. They all have this look of extreme terror on their faces like whatever they saw scared them into this state. Only too late do you notice that your body had become stiff and your breathing heavy. You turn around to see a statue you didnt see when you came in directly behind you like it was following you. Too late do you realize staring at it turned you to stone too",
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
        deathMsg: "You climb up the ladder to the attic and notice that the place is filled with lifelike sculptures. Each one is extremely detailed and they all have clothes from different time periods. They all have this look of extreme terror on their faces like whatever they saw scared them into this state. Only too late do you notice that your body had become stiff and your breathing heavy. You turn around to see a statue you didnt see when you came in directly behind you like it was following you. Too late do you realize staring at it turned you to stone too. Your trapped here forever."
    },
    {
        roomName: "Safe Exit",
        message: "You exit the house through the window and climb down to the sidewalk to your safety. You muster every bit of energy to run as far and as fast as you can until you see a car driving down the road. You wave it down, and the couple inside are kind enough to drive you back home. After you get settled in the back seat, you decide to close your eyes.",
    },
    {
        roomName: "Dangerous Exit",
        message: "You jump out of the window onto the branch, which then fell with you on it. You are hurt but can still walk. Even with the pain, you muster every bit of energy to run as far and as fast as you can until you see a car driving down the road. You wave it down, and the couple inside are kind enough to drive you back home. After you get settled in the back seat, you decide to close your eyes.",
        deathMsg: "The branch crushed you when you hit the ground"
    },
]