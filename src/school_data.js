const schoolData = [
  {
    name: "SUNY Albany",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/University_at_Albany_Seal.png",
    desc: "In the heart of the capital, SUNY Albany is where ambition meets action. With its futuristic architecture and vibrant campus life, it's a hotspot for future leaders, thinkers, and doers. Get ready to make your mark.",
  },

  {
    name: "SUNY Binghamton",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/67/State_University_of_New_York_at_Binghamton_Seal.png",
    desc: "SUNY Binghamton, a.k.a. 'The Premier Public Ivy,' offers a stellar education without the Ivy League price tag. It's a place where smart meets cool, and the future is yours to create.",
  },
  //   {
  //     name: "SUNY Brockport",
  //     imageUrl:
  //       "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/brockport.jpg",
  //     desc: "SUNY Brockport is where you go to break the mold. With top-tier athletic programs and dynamic academic offerings, it's all about pushing limits, breaking sweat, and achieving greatness. Ready to play hard and study hard?",
  //   },
  {
    name: "University at Buffalo",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/eb/University_at_Buffalo_seal.svg",
    desc: "Big city vibes in a compact campus? That's the University at Buffalo. A powerhouse of research and innovation, it’s where you can chase your dreams and catch them, too. Let's invent the future.",
  },
  {
    name: "SUNY Cobleskill",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/SUNY_Cobleskill_seal.svg/1200px-SUNY_Cobleskill_seal.svg.png",
    desc: "Agriculture, tech, and sustainability collide at SUNY Cobleskill. It's all about getting your hands dirty in the best way possible, whether you’re in the field or the lab. Grow your future here.",
  },

  {
    name: "Cornell University",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/800px-Cornell_University_seal.svg.png",
    desc: "At the intersection of innovation and agriculture, SUNY Cornell's Ag and Life Sciences is where green thumbs meet brilliant minds. Dive into sustainability and science in an institution that’s shaping tomorrow’s earth guardians.",
  },
  {
    name: "SUNY Cortland",
    imageUrl:
      "https://www2.cortland.edu/dA/257ff005e8/seal-red.png?language_id=1",
    desc: "With a spirit as fiery as their Red Dragon mascot, SUNY Cortland is all about igniting passion. From sports to sciences, it’s a place to fan the flames of your ambition and let your dreams soar.",
  },
  //   {
  //     name: "SUNY Delhi",
  //     imageUrl:
  //       "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/delhi.jpg",
  //     desc: "Where innovation meets the great outdoors, SUNY Delhi is a creative powerhouse in a breathtaking setting. Whether you’re into tech, hospitality, or sustainability, get ready to launch your career from the top of the Catskills.",
  //   },
  //   {
  //     name: "SUNY Downstate",
  //     imageUrl:
  //       "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/downstate.jpg",
  //     desc: "At SUNY Downstate, it's all about making a difference in healthcare. In the heart of Brooklyn, get ready to be on the frontline of medical innovation. This is where heroes in scrubs are made.",
  //   },
  //   {
  //     name: "SUNY Empire State",
  //     imageUrl:
  //       "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/empirestate.jpg",
  //     desc: "Flexibility is the name of the game at SUNY Empire State. Designed for those who march to the beat of their own drum, this school offers personalized learning paths that fit your life and your goals.",
  //   },
  {
    name: "SUNY Farmingdale",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/SUNY_Farmingdale_seal.svg/1200px-SUNY_Farmingdale_seal.svg.png",
    desc: "SUNY Farmingdale is where dreams are engineered. With state-of-the-art labs and a campus buzzing with innovation, your future in science and technology starts here.",
  },
  {
    name: "SUNY FIT",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2b/Fashion_Institute_of_Technology_Logo_High_Quality.png",
    desc: "In the heart of Manhattan, SUNY FIT is the runway to your fashion and design dreams. Be it fashion, marketing, or art, get ready to make your mark in the industries that never sleep.",
  },
  {
    name: "SUNY Fredonia",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/SUNY_Fredonia_seal.svg/1200px-SUNY_Fredonia_seal.svg.png",
    desc: "Where arts and sciences collide, SUNY Fredonia is a creative haven for thinkers and doers. It's your stage to perform, invent, and shine, all in a close-knit community that feels like home.",
  },
  {
    name: "SUNY Geneseo",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d1/SUNY_Geneseo_seal.svg",
    desc: "Perched on a hill, SUNY Geneseo offers breathtaking views and brilliant minds. It's a place where education meets inspiration, fostering a community dedicated to learning and personal growth.",
  },
  {
    name: "SUNY Maritime",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/SUNY_Maritime_seal_full_color.svg/1200px-SUNY_Maritime_seal_full_color.svg.png",
    desc: "SUNY Maritime offers an adventure on the high seas and a career that’s as boundless as the ocean. With a legacy of excellence, it’s the place to turn your nautical dreams into reality.",
  },
  //   {
  //     name: "SUNY Morrisville",
  //     imageUrl:
  //       "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/morrisville.jpg",
  //     desc: "SUNY Morrisville is where innovation drives action. It's the perfect place for doers, dreamers, and thinkers who want to get their hands dirty and make a real impact. Get ready for a hands-on education that prepares you for tomorrow.",
  //   },
  {
    name: "SUNY New Paltz",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/SUNY_New_Paltz_seal.svg/800px-SUNY_New_Paltz_seal.svg.png",
    desc: "Nestled in the artistic heart of the Hudson Valley, SUNY New Paltz is where creativity meets academia. It's a community that values diversity, encourages curiosity, and empowers students to forge their own paths.",
  },
  {
    name: "SUNY Old Westbury",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/SUNY_Old_Westbury_seal.svg/1200px-SUNY_Old_Westbury_seal.svg.png",
    desc: "SUNY Old Westbury stands for social justice and innovation. It’s where critical thinking and activism go hand in hand, preparing you to make a difference in the world. Join a community that cares and dares to change the status quo.",
  },
  {
    name: "SUNY Oneonta",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e8/SUNY_Oneonta_seal.svg",
    desc: "Nestled in the hills of upstate New York, SUNY Oneonta offers a vibrant community where education is personalized and passions are pursued with zeal. It’s your home away from home, where you'll write the next chapter of your story.",
  },
  {
    name: "SUNY Oswego",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/SUNY_Oswego_seal.svg/1200px-SUNY_Oswego_seal.svg.png",
    desc: "Perched on the shores of Lake Ontario, SUNY Oswego offers a stunning backdrop for your college journey. It's where innovative programs meet a passionate community, ready to embrace the winds of change.",
  },
  {
    name: "SUNY Plattsburgh",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/SUNY_Plattsburgh_seal.svg/800px-SUNY_Plattsburgh_seal.svg.png",
    desc: "Nestled near the Adirondacks and Canada, SUNY Plattsburgh is a melting pot of culture and opportunity. With a friendly campus vibe and a world of adventure nearby, it’s where you’ll discover your path and yourself.",
  },
  {
    name: "SUNY Potsdam",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/SUNY_Potsdam_seal.svg/1200px-SUNY_Potsdam_seal.svg.png",
    desc: "Home to the renowned Crane School of Music, SUNY Potsdam is where arts and academics dance together. In the heart of the North Country, find your rhythm and compose the future you dream of.",
  },
  //   {
  //     name: "SUNY Purchase",
  //     imageUrl:
  //       "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/purchase.jpg",
  //     desc: "SUNY Purchase is a creative powerhouse where bold ideas and diverse voices converge. Known for its arts programs, it's a place where you can challenge conventions and make your mark on the world.",
  //   },
  {
    name: "SUNY Stony Brook",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Stony_Brook_University_seal.svg/1200px-Stony_Brook_University_seal.svg.png",
    desc: "SUNY Stony Brook, a leader in STEM, is where curiosity meets discovery. With a sprawling campus on Long Island, dive into research, innovation, and a vibrant student life that’s as dynamic as its academics.",
  },
  {
    name: "SUNY Polytechnic Institute",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/SUNY_Polytechnic_Institute_seal.svg/1200px-SUNY_Polytechnic_Institute_seal.svg.png",
    desc: "SUNY Polytechnic is where technology and innovation intersect, offering cutting-edge programs in Utica and Albany. If you’re driven by discovery and a desire to shape the future, SUNY Poly is your playground.",
  },
  {
    name: "Upstate Medical University",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c2/Upstate_Medical_University_Seal.png",
    desc: "At the forefront of medical education, SUNY Upstate is where healthcare heroes are born. Located in Syracuse, it offers unparalleled opportunities in medical research, patient care, and community service.",
  },
];

// ----------------------------------------------------

const definitions = [
  {
    school: "SUNY Binghamton",
    definition: "The [lamest] college [on the face] of [the Earth].",
    permalink: "http://suny-binghamton.urbanup.com/498280",
    example: "[AAHH]!! No [city life]!!!",
  },
  {
    school: "University at Buffalo",
    definition: `A well respected University in the city of Buffalo, New York. [UB] is a flagship of the State University of [New York system] and is over 165 years old. The school offers some of the nations best degrees in Business, Architecture, Medicine, Dentistry, engineering, physics, education, and social sciences, to name a few. [UB's] athletic teams play in the Mid American Conference and are an [FBS], Division 1 program. The athletic teams are known as the "Bulls", while the schools mascot is "Victor E. Bull". UB comprises roughly 20,000 undergraduates and about 10,000 graduate students. It is the largest university in the Northeast (comprising New England and New York State). Despite the other definition, UB is in fact a prestigious university and is one of the hardest schools to be accepted into in [the state of New York]. It also has lower admission rates than many competing flagship public schools in the nation.`,
    permalink: "http://university-at-buffalo.urbanup.com/6001221",
    example:
      "Person 1: Man I wish I went to the University at [Buffalo]...they have athletics, well respected programs, and an awesome [college experience]...too bad I'll be going to a private school that costs $[56],000\n" +
      "\n" +
      "Person 2: Yeah, well I go to the University at Buffalo...and by the time we both graduate, we'll be making the same amount of money...except you'll be in $200,000 of debt.\n" +
      "\n" +
      "Person 3: *sigh*",
  },
  {
    school: "SUNY Cobleskill",
    definition:
      "A New York State University set in the beautiful hills of [Cobleskill], NY. At first glance it looks like a redneck community, but wait until school comes into session.  We have just as many drug dealers and stabbings as you more urban universities. The university will never be known for partying, only fat girls in tight shirts, [line dancing] and freezing cold winters. The only sensable group is contained a few miles [off campus], the soccer house.",
    permalink: "http://suny-cobleskill.urbanup.com/1857264",
    example:
      "SUNY Cobleskill is a backwoods university where men are men and sheep are nervous, lacking enough booze to get [Ron White] a little drunk, known for its only [profitable] business, [Tractor Supply] Co.",
  },
  {
    school: "Cornell University",
    definition:
      "Where [Harvard] goes to lose at [hockey].  Also see: [Lynah Rink].",
    permalink: "http://cornell-university.urbanup.com/1035917",
    example:
      "i.e., Cornell University beats [Harvard] 2-0 at home. i.e., [Harvard's] inability to score [on a friday] night.",
  },
  {
    school: "SUNY Cortland",
    definition:
      "A small college full of jocks and future gym teachers. If your looking to party, drink, or get raped take a trip to [Cortland]. For real though, Cortland weekends are of the hook and the parties rival any big school like Syracuse and [UCONN].\n" +
      "\n" +
      "The girls are hot, reckless, and get fucking hammered on the reg\n" +
      "\n" +
      "Hit up 8 monroe, 100 [tompkins], or 96 [Groton] on a friday or saturday night and your guaranteed to not remember the last 5 hours of your night, which probably involved stumbling down to main street and walking into bars like Dark Horse or Stone Lounge.\n" +
      "\n" +
      "Oh yeah and class is completely optional",
    permalink: "http://suny-cortland.urbanup.com/5648755",
    example:
      "1)\n" +
      "\n" +
      "Kid 1: yo you lookin to party this weekend?\r\n" +
      "Kid 2: hell yeah\r\n" +
      "Kid 1: GET YOUR ASS TO [SUNY] FUCKIN' [CORTLAND]!\n" +
      "\n" +
      "2)\n" +
      "\n" +
      "*kid wakes up on a random [lawn]\r\n" +
      '"Yo, where the fuck am i?"\r\n' +
      '"SUNY [Cortland] bro!"',
  },
  {
    school: "SUNY Farmingdale",
    definition:
      "A [state college] located on long island just off Route [110] near the Suffolk-Nassau border. Easy college to get into where many of the students are socially quiet unless someone starts up a conversation. When the weekend comes by the campus is near deserted except for the dormers and cafe workers. There are little to no parties on campus due to strict [campus police]",
    permalink: "http://suny-farmingdale.urbanup.com/6865389",
    example:
      "Yo your [dorming] at college right?\r\n" +
      "[Yeah why]?\r\n" +
      "Must be some crazy parties there!\r\n" +
      "[Nope]\r\n" +
      "Oh your at suny farmingdale...",
  },
  {
    school: "SUNY Fredonia",
    definition:
      "One of the greatest party schools in the [SUNY] system. Why? Because there's nothing else to do in [Fredonia]! However, it's still more fun, friendly, and unique. At least half the school is either a music or an education major. The weekends start on Thursday (sometimes Wednesday) and Sunday morning breakfasts at [Cranston] are where it's at. Fredfest is one of the most anticipated weekends for every Fredonia student, and for good reason. There's probably more trees than there is at your school too. [Sunny's] is the easiest bar to drink at underage, but also the grossest. If you're cool enough, you'll know how to get into the other ones.",
    permalink: "http://suny-fredonia.urbanup.com/4025548",
    example:
      "Person 1: Hey what school are you going to in the fall?\r\n" +
      "Person 2: SUNY Fredonia!\r\n" +
      "Person 1: What made [you choose] to go there?\r\n" +
      "Person 2: I heard it's a good [party school], and the [tuition] isn't bad.",
  },
  {
    school: "SUNY Geneseo",
    definition:
      "The stereotypical [college town] minus any form of diversity and in the middle of nowhere.  The predominately white, female student body makes up more than half the town of [Geneseo's] population.  On any given weekend the entire student body can be found migrating to the [North side] of campus to drink at the many frat houses on Court St.  If students don't pass out somewhere outside of the frats they stumble up to one of the many bars along Main St.  Sports are not Geneseo's forte unless you like running or hockey, or chasing down and beating up honkeys cause there are a lot of them.  ",
    permalink: "http://suny-geneseo.urbanup.com/1597698",
    example:
      "I went to SUNY Geneseo for [the weekend] and got [wasted], then we killed some [crackers].",
  },
  {
    school: "SUNY Maritime",
    definition:
      "A college situated in the Bronx, NYC... it is known for its corrupt [regimental] staff, idiotic cadets, and job [placement] office for an industry which the US really doesn't have anymore. Largely a waste of time and [tuition]",
    permalink: "http://suny-maritime.urbanup.com/1784712",
    example:
      '"SUNY Maritime College sucks man, they promised me 100% job [placement], and [99.9]% of [my job] offers are shoreside."',
  },
  {
    school: "SUNY New Paltz",
    definition:
      "school full of hicks and hippie-wannabes. People play the [bongos] at [4am], and the alcohol is [plentiful]. Some weird kids even stand in the middle of campus and make alien noises. Alot of art majors here.",
    permalink: "http://suny-new-paltz.urbanup.com/874276",
    example: "[the town] here seems to be two [years] [behind] everything.",
  },
  {
    school: "SUNY Oneonta",
    definition:
      'Imagine the middle of nowhere add a main street and approximatly 12 bars and 5 pizza places (only one with [cold pizza]). The campus is generally very nice unless you live in [hulbert] which is like the center for death becuase its so far from anything else on the campus. A place ruled by greek life and even if you arent in one random people call your room phone every min of everyday during [rush week] to get you to pledge. A place where the parties are usually closed but yet you can manage to hang out until all hours of the morning at either the bars or in the rooms. You know it isnt called [stoneonta] for nothing! All in all it is a wonderful school if you are getting your "higher" education in the field of alcohol, THC or cold pizza consumption',
    permalink: "http://suny-oneonta.urbanup.com/1106284",
    example: "[I want] [to go] to SUNY Oneonta",
  },
  {
    school: "SUNY Oswego",
    definition:
      "(1) Place of attendence that involves some gangsta ass nigs that [ride dirty] with sophistication and class like your mom was last night. [Bitches be crazy] and playas be [straight nasty]. \r\n" +
      "\r\n" +
      "(2) To describe INTENSE consumption of beer/boos/drugs... to make a long story short THAT SHIT BE BANGIN\r\n" +
      "\r\n" +
      "(3) Fine academic establishment",
    permalink: "http://suny-oswego.urbanup.com/1958340",
    example:
      "(1) DUDE #1: Yo son last weekend at SUNY Oswego shit was off the hizzie and the [po po's] were all up on my shit.\r\n" +
      "DUDE #2: OH SNAP!! Did you pull out your gat yo?!\r\n" +
      "DUDE #1: Nah son, I just [coo coo'd]\r\n" +
      "\r\n" +
      "(2) YO we strait up [SUNY Oswego'd] it last night son!",
  },
  {
    school: "SUNY Plattsburgh",
    definition:
      "State University of New York at [Plattsburgh] was once known as a sub-par institution. From 1971-2005, a person pretty much needed a #2 pencil to get in.\n" +
      "\n" +
      "Due to the rapid influx of Gen Y freshman tied with the 2008 recession, the admissions office started getting strict (like all SUNYs) in their selection process, and the overall campus community started to mature.\n" +
      "\n" +
      'An accounting professor who once taught at the prestigious [Wharton School of Business] came to Plattsburgh State in 2009 for a trial semester. He stayed because, "the students are hungrier for knowledge". (Note: The business school is AACSB accredited)\n' +
      "\n" +
      "Thus some time between 2003 and 2007 the last gasp of morons started to graduate (or drop out) and Plattsburgh found itself as a premiere institution.\n" +
      "\n" +
      "So if you're looking for social diversity and well-rounded business, communications, nursing and education programs. You'll get it at SUNY Plattsburgh.\n" +
      "\n" +
      "Thankfully there are no more people on campus like the author of [Plattsburgh State University], so ignore the school's old reputation. I did, and now I have a great job",
    permalink: "http://suny-plattsburgh.urbanup.com/5501342",
    example:
      "I heard SUNY Plattsburgh [sucked] academically.\n" +
      "\n" +
      "[You're right], it did [suck]. But it no longer does suck.",
  },
  {
    school: "SUNY Stony Brook",
    definition:
      "A college on [the north shore] of eastern long island made up of mostly asians and teachers who don't speak English very well.  It is a good science school simply for the fact that it has extremely hard science classes and is [notorius] for its crazy [night life] at the full moon cafe.",
    permalink: "http://suny-stony-brook.urbanup.com/1121315",
    example:
      "Did you pass the [orgo] test? \r\n" +
      "Hell yeah good thing I payed [Todds] $400 to tutor me.\r\n" +
      "[wooah] thats so stonybrook!",
  },
];

const newData = [
  {
    name: "SUNY Albany",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/University_at_Albany_Seal.png",
    desc: "In the heart of the capital, SUNY Albany is where ambition meets action. With its futuristic architecture and vibrant campus life, it's a hotspot for future leaders, thinkers, and doers. Get ready to make your mark.",
    definition:
      "the craziest, sickest and best party school ever.. even though its cloudly like every day and freezing cold october-may...",
    permalink: "https://www.urbandictionary.com/define.php?term=ualbany",
    example: "[AAHH]!! No [city life]!!!",
  },
  {
    name: "SUNY Binghamton",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/67/State_University_of_New_York_at_Binghamton_Seal.png",
    desc: "SUNY Binghamton, a.k.a. 'The Premier Public Ivy,' offers a stellar education without the Ivy League price tag. It's a place where smart meets cool, and the future is yours to create.",
    definition: "The [lamest] college [on the face] of [the Earth].",
    permalink: "http://suny-binghamton.urbanup.com/498280",
    example: "[AAHH]!! No [city life]!!!",
  },
  {
    name: "University at Buffalo",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/eb/University_at_Buffalo_seal.svg",
    desc: "Big city vibes in a compact campus? That's the University at Buffalo. A powerhouse of research and innovation, it’s where you can chase your dreams and catch them, too. Let's invent the future.",
    definition: `A well respected University in the city of Buffalo, New York. [UB] is a flagship of the State University of [New York system] and is over 165 years old.`,
    permalink: "http://university-at-buffalo.urbanup.com/6001221",
    example:
      "Person 1: Man I wish I went to the University at [Buffalo]...they have athletics, well respected programs, and an awesome [college experience]...too bad I'll be going to a private school that costs $[56],000\n" +
      "\n" +
      "Person 2: Yeah, well I go to the University at Buffalo...and by the time we both graduate, we'll be making the same amount of money...except you'll be in $200,000 of debt.\n" +
      "\n" +
      "Person 3: *sigh*",
  },
  {
    name: "SUNY Cobleskill",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/SUNY_Cobleskill_seal.svg/1200px-SUNY_Cobleskill_seal.svg.png",
    desc: "Agriculture, tech, and sustainability collide at SUNY Cobleskill. It's all about getting your hands dirty in the best way possible, whether you’re in the field or the lab. Grow your future here.",
    definition:
      "At first glance it looks like a redneck community, but wait until school comes into session.  We have just as many drug dealers and stabbings as you more urban universities. ",
    permalink: "http://suny-cobleskill.urbanup.com/1857264",
    example:
      "SUNY Cobleskill is a backwoods university where men are men and sheep are nervous, lacking enough booze to get [Ron White] a little drunk, known for its only [profitable] business, [Tractor Supply] Co.",
  },
  {
    name: "Cornell University",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/800px-Cornell_University_seal.svg.png",
    desc: "At the intersection of innovation and agriculture, SUNY Cornell's Ag and Life Sciences is where green thumbs meet brilliant minds. Dive into sustainability and science in an institution that’s shaping tomorrow’s earth guardians.",
    definition:
      "Where [Harvard] goes to lose at [hockey].  Also see: [Lynah Rink].",
    permalink: "http://cornell-university.urbanup.com/1035917",
    example:
      "i.e., Cornell University beats [Harvard] 2-0 at home. i.e., [Harvard's] inability to score [on a friday] night.",
  },
  {
    name: "SUNY Cortland",
    imageUrl:
      "https://www2.cortland.edu/dA/257ff005e8/seal-red.png?language_id=1",
    desc: "With a spirit as fiery as their Red Dragon mascot, SUNY Cortland is all about igniting passion. From sports to sciences, it’s a place to fan the flames of your ambition and let your dreams soar.",
    definition:
      "A small college full of jocks and future gym teachers. If your looking to party, drink, or get raped take a trip to [Cortland].",
    permalink: "http://suny-cortland.urbanup.com/5648755",
    example:
      "1)\n" +
      "\n" +
      "Kid 1: yo you lookin to party this weekend?\r\n" +
      "Kid 2: hell yeah\r\n" +
      "Kid 1: GET YOUR ASS TO [SUNY] FUCKIN' [CORTLAND]!\n" +
      "\n" +
      "2)\n" +
      "\n" +
      "*kid wakes up on a random [lawn]\r\n" +
      '"Yo, where the fuck am i?"\r\n' +
      '"SUNY [Cortland] bro!"',
  },
  {
    name: "SUNY Farmingdale",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/SUNY_Farmingdale_seal.svg/1200px-SUNY_Farmingdale_seal.svg.png",
    desc: "SUNY Farmingdale is where dreams are engineered. With state-of-the-art labs and a campus buzzing with innovation, your future in science and technology starts here.",
    definition:
      "Easy college to get into where many of the students are socially quiet unless someone starts up a conversation. When the weekend comes by the campus is near deserted except for the dormers and cafe workers.",
    permalink: "http://suny-farmingdale.urbanup.com/6865389",
    example:
      "Yo your [dorming] at college right?\r\n" +
      "[Yeah why]?\r\n" +
      "Must be some crazy parties there!\r\n" +
      "[Nope]\r\n" +
      "Oh your at suny farmingdale...",
  },
  {
    name: "SUNY FIT",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2b/Fashion_Institute_of_Technology_Logo_High_Quality.png",
    desc: "In the heart of Manhattan, SUNY FIT is the runway to your fashion and design dreams. Be it fashion, marketing, or art, get ready to make your mark in the industries that never sleep.",
    definition:
      "A state university of New York where students fall into four stereotypes: bitches, hypebeasts, drag queens, and normal people. ",
    permalink:
      "https://www.urbandictionary.com/define.php?term=Fashion%20Institute%20of%20Technology",
    example:
      "Yo your [dorming] at college right?\r\n" +
      "[Yeah why]?\r\n" +
      "Must be some crazy parties there!\r\n" +
      "[Nope]\r\n" +
      "Oh your at suny farmingdale...",
  },
  {
    name: "SUNY Fredonia",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/SUNY_Fredonia_seal.svg/1200px-SUNY_Fredonia_seal.svg.png",
    desc: "Where arts and sciences collide, SUNY Fredonia is a creative haven for thinkers and doers. It's your stage to perform, invent, and shine, all in a close-knit community that feels like home.",
    definition:
      "One of the greatest party schools in the [SUNY] system. Why? Because there's nothing else to do in [Fredonia]! However, it's still more fun, friendly, and unique. At least half the school is either a music or an education major. ",
    permalink: "http://suny-fredonia.urbanup.com/4025548",
    example:
      "Person 1: Hey what school are you going to in the fall?\r\n" +
      "Person 2: SUNY Fredonia!\r\n" +
      "Person 1: What made [you choose] to go there?\r\n" +
      "Person 2: I heard it's a good [party school], and the [tuition] isn't bad.",
  },
  {
    name: "SUNY Geneseo",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d1/SUNY_Geneseo_seal.svg",
    desc: "Perched on a hill, SUNY Geneseo offers breathtaking views and brilliant minds. It's a place where education meets inspiration, fostering a community dedicated to learning and personal growth.",
    definition:
      "The stereotypical [college town] minus any form of diversity and in the middle of nowhere.  The predominately white, female student body makes up more than half the town of [Geneseo's] population.",
    permalink: "http://suny-geneseo.urbanup.com/1597698",
    example:
      "I went to SUNY Geneseo for [the weekend] and got [wasted], then we killed some [crackers].",
  },
  {
    name: "SUNY Maritime",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/SUNY_Maritime_seal_full_color.svg/1200px-SUNY_Maritime_seal_full_color.svg.png",
    desc: "SUNY Maritime offers an adventure on the high seas and a career that’s as boundless as the ocean. With a legacy of excellence, it’s the place to turn your nautical dreams into reality.",
    definition:
      "A college situated in the Bronx, NYC... it is known for its corrupt [regimental] staff, idiotic cadets, and job [placement] office for an industry which the US really doesn't have anymore. Largely a waste of time and [tuition]",
    permalink: "http://suny-maritime.urbanup.com/1784712",
    example:
      '"SUNY Maritime College sucks man, they promised me 100% job [placement], and [99.9]% of [my job] offers are shoreside."',
  },
  {
    name: "SUNY New Paltz",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/SUNY_New_Paltz_seal.svg/800px-SUNY_New_Paltz_seal.svg.png",
    desc: "Nestled in the artistic heart of the Hudson Valley, SUNY New Paltz is where creativity meets academia. It's a community that values diversity, encourages curiosity, and empowers students to forge their own paths.",
    definition:
      "school full of hicks and hippie-wannabes. People play the [bongos] at [4am], and the alcohol is [plentiful]. Some weird kids even stand in the middle of campus and make alien noises. Alot of art majors here.",
    permalink: "http://suny-new-paltz.urbanup.com/874276",
    example: "[the town] here seems to be two [years] [behind] everything.",
  },
  {
    name: "SUNY Oneonta",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e8/SUNY_Oneonta_seal.svg",
    desc: "Nestled in the hills of upstate New York, SUNY Oneonta offers a vibrant community where education is personalized and passions are pursued with zeal. It’s your home away from home, where you'll write the next chapter of your story.",
    definition:
      'You know it isnt called [stoneonta] for nothing! All in all it is a wonderful school if you are getting your "higher" education in the field of alcohol, THC or cold pizza consumption',
    permalink: "http://suny-oneonta.urbanup.com/1106284",
    example: "[I want] [to go] to SUNY Oneonta",
  },
  {
    name: "SUNY Oswego",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/SUNY_Oswego_seal.svg/1200px-SUNY_Oswego_seal.svg.png",
    desc: "Perched on the shores of Lake Ontario, SUNY Oswego offers a stunning backdrop for your college journey. It's where innovative programs meet a passionate community, ready to embrace the winds of change.",
    definition:
      "Place of attendence that involves some gangsta ass nigs that [ride dirty] with sophistication and class like your mom was last night. [Bitches be crazy] and playas be [straight nasty].",
    permalink: "http://suny-oswego.urbanup.com/1958340",
    example:
      "(1) DUDE #1: Yo son last weekend at SUNY Oswego shit was off the hizzie and the [po po's] were all up on my shit.\r\n" +
      "DUDE #2: OH SNAP!! Did you pull out your gat yo?!\r\n" +
      "DUDE #1: Nah son, I just [coo coo'd]\r\n" +
      "\r\n" +
      "(2) YO we strait up [SUNY Oswego'd] it last night son!",
  },
  {
    name: "SUNY Plattsburgh",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/SUNY_Plattsburgh_seal.svg/800px-SUNY_Plattsburgh_seal.svg.png",
    desc: "Nestled near the Adirondacks and Canada, SUNY Plattsburgh is a melting pot of culture and opportunity. With a friendly campus vibe and a world of adventure nearby, it’s where you’ll discover your path and yourself.",
    definition:
      "State University of New York at [Plattsburgh] was once known as a sub-par institution. From 1971-2005, a person pretty much needed a #2 pencil to get in.",
    permalink: "http://suny-plattsburgh.urbanup.com/5501342",
    example:
      "I heard SUNY Plattsburgh [sucked] academically.\n" +
      "\n" +
      "[You're right], it did [suck]. But it no longer does suck.",
  },
  {
    name: "SUNY Stony Brook",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Stony_Brook_University_seal.svg/1200px-Stony_Brook_University_seal.svg.png",
    desc: "SUNY Stony Brook, a leader in STEM, is where curiosity meets discovery. With a sprawling campus on Long Island, dive into research, innovation, and a vibrant student life that’s as dynamic as its academics.",
    definition:
      "A college on [the north shore] of eastern long island made up of mostly asians and teachers who don't speak English very well.  It is a good science school simply for the fact that it has extremely hard science classes and is [notorius] for its crazy [night life] at the full moon cafe.",
    permalink: "http://suny-stony-brook.urbanup.com/1121315",
    example:
      "Did you pass the [orgo] test? \r\n" +
      "Hell yeah good thing I payed [Todds] $400 to tutor me.\r\n" +
      "[wooah] thats so stonybrook!",
  },
  {
    name: "SUNY ESF",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/9b/Sunyesfcrest.png",
    desc: "For the earth warriors and nature lovers, SUNY ESF is your academic paradise. Dive into studies that save planets and create a sustainable future, all while surrounded by the lush landscapes of Upstate New York.",
    definition:
      "Hippies. Just tons of goddamn no good dirty hippies. Also they have no athletics.",
    permalink: "https://www.urbandictionary.com/define.php?term=Suny%20Esf",
    example: "Man Suny Esf is fucking gay",
  },
  {
    name: "Purchase College",
    imageUrl:
      "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/purchase.jpg",
    desc: "SUNY Purchase is a creative powerhouse where bold ideas and diverse voices converge. Known for its arts programs, it's a place where you can challenge conventions and make your mark on the world.",
    definition:
      "a chemical reaction that occurs when thousands of misfit hipster types descend upon a shitty post industrial pseudo campus,",
    permalink:
      "https://www.urbandictionary.com/define.php?term=Purchase%20college",
    example: "Man Suny Esf is fucking gay",
  },
  {
    name: "SUNY Polytechnic Institute",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/SUNY_Polytechnic_Institute_seal.svg/1200px-SUNY_Polytechnic_Institute_seal.svg.png",
    desc: "SUNY Purchase is a creative powerhouse where bold ideas and diverse voices converge. Known for its arts programs, it's a place where you can challenge conventions and make your mark on the world.",
    definition:
      "Students who initially attend regret their decision weeks later, but find that the credits will not transfer anywhere. The school acts as the quicksand of the SUNY system.",
    permalink: "https://www.urbandictionary.com/define.php?term=SUNY%20IT",
    example: "Man Suny Esf is fucking gay",
  },
  {
    name: "SUNY Brockport",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/SUNY_Brockport_logo_2022.jpg/250px-SUNY_Brockport_logo_2022.jpg",
    desc: "SUNY Brockport is where you go to break the mold. With top-tier athletic programs and dynamic academic offerings, it's all about pushing limits, breaking sweat, and achieving greatness. Ready to play hard and study hard?",
    definition: "College in upstate New York widely known for its alleged excessively high STD rates that are among the highest in the nation.",
    permalink: "https://www.urbandictionary.com/define.php?term=SUNY%20Brockport"
  },
  {
    name: "SUNY Potsdam",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/SUNY_Potsdam_seal.svg/1200px-SUNY_Potsdam_seal.svg.png",
    desc: "SUNY Brockport is where you go to break the mold. With top-tier athletic programs and dynamic academic offerings, it's all about pushing limits, breaking sweat, and achieving greatness. Ready to play hard and study hard?",
    definition: "Girls here get a three point curve, ie. a 3 point fat chick is rated at 6 points at Potsdam. Girls 7 and above do not exist.",
    permalink: "https://www.urbandictionary.com/define.php?term=Potsdam"
  },

];

function removeBracketsFromDefinitions(data) {
  return data.map((item) => ({
    ...item,
    definition: item.definition.replace(/\[([^\]]+)\]/g, "$1"),
  }));
}
const updatedData = removeBracketsFromDefinitions(newData);
console.log(updatedData);
const mergedData = schoolData.map((school) => {
  // Find the definition for the current school
  const definitionForSchool = definitions.find(
    (def) => def.school === school.name
  );

  // If a definition is found, merge it into the current school object
  if (definitionForSchool) {
    return {
      ...school,
      definition: definitionForSchool.definition,
      permalink: definitionForSchool.permalink,
      example: definitionForSchool.example,
    };
  }

  // If no definition is found, return the school data as is
  return school;
});
// console.log(mergedData);

export { schoolData, mergedData, newData, updatedData };
