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

export { schoolData };
