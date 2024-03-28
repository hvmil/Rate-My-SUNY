const schoolData = [
    {
      name: "SUNY Adirondack",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/adirondack.jpg",
      desc: "Nestled among forests and lakes, SUNY Adirondack offers a chill vibe and a perfect mix of nature and tech. Dive into your studies or explore the great outdoors - it’s the ultimate place to level up your skills and chillax.",
    },
    {
      name: "SUNY Albany",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/albany.jpg",
      desc: "In the heart of the capital, SUNY Albany is where ambition meets action. With its futuristic architecture and vibrant campus life, it's a hotspot for future leaders, thinkers, and doers. Get ready to make your mark.",
    },
    {
      name: "SUNY Alfred Ceramics",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/alfred-ceramics.jpg",
      desc: "SUNY Alfred Ceramics isn’t just about pottery; it’s a creative haven where art meets innovation. Imagine, create, and fire up your artistic vision in a place that’s as unique as your creations.",
    },
    {
      name: "SUNY Alfred State",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/alfred-state.jpg",
      desc: "Get hands-on and build your future at SUNY Alfred State. Known for its ‘learn by doing’ approach, it's the ultimate playground for future engineers, architects, and innovators. Ready, set, invent!",
    },
    {
      name: "SUNY Binghamton",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/binghamton.jpg",
      desc: "SUNY Binghamton, a.k.a. 'The Premier Public Ivy,' offers a stellar education without the Ivy League price tag. It's a place where smart meets cool, and the future is yours to create.",
    },
    {
      name: "SUNY Brockport",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/brockport.jpg",
      desc: "SUNY Brockport is where you go to break the mold. With top-tier athletic programs and dynamic academic offerings, it's all about pushing limits, breaking sweat, and achieving greatness. Ready to play hard and study hard?",
    },
    {
      name: "SUNY Broome",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/broome.jpg",
      desc: "At SUNY Broome, community is everything. Dive into a close-knit vibe where everyone knows your name and supports your game. It’s your home away from home, but with way cooler classes.",
    },
    {
      name: "University at Buffalo",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/buffalo.jpg",
      desc: "Big city vibes in a compact campus? That's the University at Buffalo. A powerhouse of research and innovation, it’s where you can chase your dreams and catch them, too. Let's invent the future.",
    },
    {
      name: "Buffalo State College",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/buffalostate.jpg",
      desc: "Buffalo State College is the creative heart of New York. Whether it’s art, education, or social change, here’s where you light up your passion and spark the next big thing. Let's create magic.",
    },
    {
      name: "SUNY Canton",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/canton.jpg",
      desc: "Tech-savvy, eco-friendly, and forward-thinking: that’s SUNY Canton. Gear up for a future where sustainability meets innovation. Your journey starts in a campus that feels like tomorrow.",
    },
    {
      name: "SUNY Cayuga",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/cayuga.jpg",
      desc: "SUNY Cayuga is your lakeside academic retreat. Smaller classes, personal attention, and a serene campus set the stage for big ideas and peaceful vibes. Dive into learning and let your mind sail.",
    },
    {
      name: "SUNY Clinton",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/clinton.jpg",
      desc: "SUNY Clinton is where ambition meets adventure. Close to mountains and lakes, it's a perfect base for both hitting the books and the trails. Study hard, play hard, and live your best life.",
    },
    {
      name: "SUNY Cobleskill",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/cobleskill.jpg",
      desc: "Agriculture, tech, and sustainability collide at SUNY Cobleskill. It's all about getting your hands dirty in the best way possible, whether you’re in the field or the lab. Grow your future here.",
    },
    {
      name: "SUNY Columbia-Greene",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/columbia-greene.jpg",
      desc: "Where the Hudson River meets the Catskills, SUNY Columbia-Greene stands as a beacon of opportunity. It's a place where your education blends with nature, offering a serene yet stimulating environment to grow.",
    },
    {
      name: "SUNY Cornell Agriculture and Life Sciences",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/cornell-als.jpg",
      desc: "At the intersection of innovation and agriculture, SUNY Cornell's Ag and Life Sciences is where green thumbs meet brilliant minds. Dive into sustainability and science in an institution that’s shaping tomorrow’s earth guardians.",
    },
    {
      name: "SUNY Cornell Ecology",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/cornell-ecology.jpg",
      desc: "For those who dream of a greener planet, SUNY Cornell Ecology is your arena. It’s more than a place to learn; it's where you'll fight climate change with knowledge and action. Ready to join the eco-revolution?",
    },
    {
      name: "SUNY Cornell Industrial and Labor Relations",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/Cornell-ILR-logo.jpg",
      desc: "SUNY Cornell's ILR school is where justice meets the job market. It’s the perfect spot for future leaders determined to make workplaces better for everyone. If changing the world one policy at a time sounds like your call, welcome home.",
    },
    {
      name: "SUNY Cornell Veterinary Medicine",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/cornell-vet.jpg",
      desc: "Animal lovers and future vets, your dream school awaits at SUNY Cornell Veterinary Medicine. It’s a place where caring for creatures great and small isn’t just taught; it’s lived. Prep for a life saving furry, feathered, and scaly friends.",
    },
    {
      name: "SUNY Corning",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/corning.jpg",
      desc: "Nestled in the heart of glass country, SUNY Corning shines bright with possibilities. Whether it’s in tech, art, or science, this is where your vision becomes clear. Get ready to shape a future as brilliant as glass.",
    },
    {
      name: "SUNY Cortland",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/cortland.jpg",
      desc: "With a spirit as fiery as their Red Dragon mascot, SUNY Cortland is all about igniting passion. From sports to sciences, it’s a place to fan the flames of your ambition and let your dreams soar.",
    },
    {
      name: "SUNY Delhi",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/delhi.jpg",
      desc: "Where innovation meets the great outdoors, SUNY Delhi is a creative powerhouse in a breathtaking setting. Whether you’re into tech, hospitality, or sustainability, get ready to launch your career from the top of the Catskills.",
    },
    {
      name: "SUNY Downstate",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/downstate.jpg",
      desc: "At SUNY Downstate, it's all about making a difference in healthcare. In the heart of Brooklyn, get ready to be on the frontline of medical innovation. This is where heroes in scrubs are made.",
    },
    {
      name: "SUNY Dutchess",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/dutchess.jpg",
      desc: "SUNY Dutchess offers a vibrant community nestled in the scenic Hudson Valley. It's a place where you can explore your passions and discover new ones, all while getting a top-notch education.",
    },
    {
      name: "SUNY Empire State",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/empirestate.jpg",
      desc: "Flexibility is the name of the game at SUNY Empire State. Designed for those who march to the beat of their own drum, this school offers personalized learning paths that fit your life and your goals.",
    },
    {
      name: "SUNY ESF",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/esf.jpg",
      desc: "For the earth warriors and nature lovers, SUNY ESF is your academic paradise. Dive into studies that save planets and create a sustainable future, all while surrounded by the lush landscapes of Upstate New York.",
    },
    {
      name: "SUNY Erie",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/erie.jpg",
      desc: "In the bustling hub of Buffalo, SUNY Erie stands as a beacon of opportunity. Whether you’re aiming for a career in tech, health, or business, this is where your journey begins.",
    },
    {
      name: "SUNY Farmingdale",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/farmingdale.jpg",
      desc: "SUNY Farmingdale is where dreams are engineered. With state-of-the-art labs and a campus buzzing with innovation, your future in science and technology starts here.",
    },
    {
      name: "SUNY FIT",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/fit.jpg",
      desc: "In the heart of Manhattan, SUNY FIT is the runway to your fashion and design dreams. Be it fashion, marketing, or art, get ready to make your mark in the industries that never sleep.",
    },
    {
      name: "SUNY Finger Lakes",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/fingerlakes.jpg",
      desc: "SUNY Finger Lakes is a gem in a region known for its natural beauty and wine country. With programs that nurture both mind and spirit, find your passion in an environment that inspires.",
    },
    {
      name: "SUNY Fredonia",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/fredonia.jpg",
      desc: "Where arts and sciences collide, SUNY Fredonia is a creative haven for thinkers and doers. It's your stage to perform, invent, and shine, all in a close-knit community that feels like home.",
    },
    {
      name: "SUNY Fulton-Montgomery",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/fulton-montgomery.jpg",
      desc: "SUNY Fulton-Montgomery is your launchpad to success, nestled in the scenic Adirondack foothills. It's where you get the best of both worlds: a close-knit community and opportunities that know no bounds.",
    },
    {
      name: "SUNY Genesee",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/genesee.jpg",
      desc: "SUNY Genesee in Batavia is a beacon of innovation and community. Here, you’re not just a number but a key part of a vibrant learning community, ready to make an impact in your chosen field.",
    },
    {
      name: "SUNY Geneseo",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/geneseo.jpg",
      desc: "Perched on a hill, SUNY Geneseo offers breathtaking views and brilliant minds. It's a place where education meets inspiration, fostering a community dedicated to learning and personal growth.",
    },
    {
      name: "SUNY Herkimer",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/herkimer.jpg",
      desc: "SUNY Herkimer gives you the tools to build your future, with hands-on learning and a community that feels like family. Jumpstart your career here and experience how empowering education can be.",
    },
    {
      name: "SUNY Hudson Valley",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/hudsonv.jpg",
      desc: "In the heart of the Capital Region, SUNY Hudson Valley is a hub of innovation and opportunity. Whether you're aiming for a tech-savvy career or a creative pursuit, this is where your journey starts.",
    },
    {
      name: "SUNY Jamestown",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/jamestown.jpg",
      desc: "SUNY Jamestown is where potential meets opportunity in a supportive environment. With a focus on student success, it's the perfect place to hone your skills and prepare for a bright future.",
    },
    {
      name: "SUNY Jefferson",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/jefferson.jpg",
      desc: "At SUNY Jefferson, education is about more than just lectures. It's about building a community, discovering your passions, and making memories that last a lifetime. Your adventure begins here.",
    },
    {
      name: "SUNY Maritime",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/maritime.jpg",
      desc: "SUNY Maritime offers an adventure on the high seas and a career that’s as boundless as the ocean. With a legacy of excellence, it’s the place to turn your nautical dreams into reality.",
    },
    {
      name: "SUNY Mohawk Valley",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/mohawk.jpg",
      desc: "Nestled in the heart of New York, SUNY Mohawk Valley is a melting pot of cultures and ideas. It's where you'll find a diverse community ready to welcome you and help you reach your highest potential.",
    },
    {
      name: "SUNY Monroe",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/monroe.jpg",
      desc: "SUNY Monroe in Rochester is a dynamic community where creativity and innovation flourish. With state-of-the-art facilities and a vibrant campus life, it's where your ambitions become achievements.",
    },
    {
      name: "SUNY Morrisville",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/morrisville.jpg",
      desc: "SUNY Morrisville is where innovation drives action. It's the perfect place for doers, dreamers, and thinkers who want to get their hands dirty and make a real impact. Get ready for a hands-on education that prepares you for tomorrow.",
    },
    {
      name: "SUNY Nassau",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/nassau.jpg",
      desc: "At SUNY Nassau, you're at the crossroads of opportunity. With a diverse range of programs and a community that champions success, your journey to greatness starts on this vibrant campus.",
    },
    {
      name: "SUNY New Paltz",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/newpaltz.jpg",
      desc: "Nestled in the artistic heart of the Hudson Valley, SUNY New Paltz is where creativity meets academia. It's a community that values diversity, encourages curiosity, and empowers students to forge their own paths.",
    },
    {
      name: "SUNY Niagara",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/niagara.jpg",
      desc: "Close to the iconic falls, SUNY Niagara is more than just a stunning location. It’s a place where you can dive into learning, discover your passions, and create a splash in whatever field you choose.",
    },
    {
      name: "SUNY North Country",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/northcountry.jpg",
      desc: "At SUNY North Country, the great outdoors is your classroom. With unique programs and a tight-knit community, it’s the ideal setting for those who love to learn by doing and are eager to explore.",
    },
    {
      name: "SUNY Old Westbury",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/oldwestbury.jpg",
      desc: "SUNY Old Westbury stands for social justice and innovation. It’s where critical thinking and activism go hand in hand, preparing you to make a difference in the world. Join a community that cares and dares to change the status quo.",
    },
    {
      name: "SUNY Oneonta",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/oneonta.jpg",
      desc: "Nestled in the hills of upstate New York, SUNY Oneonta offers a vibrant community where education is personalized and passions are pursued with zeal. It’s your home away from home, where you'll write the next chapter of your story.",
    },
    {
      name: "SUNY Onondaga",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/onondaga.jpg",
      desc: "At SUNY Onondaga, you’re part of a community that lifts you higher. Offering a range of programs and support, it’s the perfect place to grow, learn, and achieve your dreams, all while making lifelong friends.",
    },
    {
      name: "SUNY Optometry",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/optometry.jpg",
      desc: "SUNY Optometry in NYC is where visionaries are made. With cutting-edge research and clinical practice, it’s the ideal place for those who want to make a real difference in people’s lives, one pair of eyes at a time.",
    },
    {
      name: "SUNY Orange",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/orange.jpg",
      desc: "SUNY Orange is your gateway to a vibrant future, offering diverse programs in the heart of the Hudson Valley. With campuses in Middletown and Newburgh, it's where your dreams start taking shape in a community that feels like family.",
    },
    {
      name: "SUNY Oswego",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/oswego.jpg",
      desc: "Perched on the shores of Lake Ontario, SUNY Oswego offers a stunning backdrop for your college journey. It's where innovative programs meet a passionate community, ready to embrace the winds of change.",
    },
    {
      name: "SUNY Plattsburgh",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/plattsburgh.jpg",
      desc: "Nestled near the Adirondacks and Canada, SUNY Plattsburgh is a melting pot of culture and opportunity. With a friendly campus vibe and a world of adventure nearby, it’s where you’ll discover your path and yourself.",
    },
    {
      name: "SUNY Potsdam",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/potsdam.jpg",
      desc: "Home to the renowned Crane School of Music, SUNY Potsdam is where arts and academics dance together. In the heart of the North Country, find your rhythm and compose the future you dream of.",
    },
    {
      name: "SUNY Purchase",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/purchase.jpg",
      desc: "SUNY Purchase is a creative powerhouse where bold ideas and diverse voices converge. Known for its arts programs, it's a place where you can challenge conventions and make your mark on the world.",
    },
    {
      name: "SUNY Rockland",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/rockland.jpg",
      desc: "At SUNY Rockland, you’ll find a community that’s as supportive as it is diverse. Located in the scenic Hudson Valley, it’s the perfect place to grow, learn, and become who you’re meant to be.",
    },
    {
      name: "SUNY Schenectady",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/schenectady.jpg",
      desc: "SUNY Schenectady is a culinary and tech hub, simmering with potential in the heart of New York’s Capital Region. Whether you’re whipping up the next big thing or coding it, your future starts here.",
    },
    {
      name: "SUNY Stony Brook",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/stonybrook.jpg",
      desc: "SUNY Stony Brook, a leader in STEM, is where curiosity meets discovery. With a sprawling campus on Long Island, dive into research, innovation, and a vibrant student life that’s as dynamic as its academics.",
    },
    {
      name: "SUNY Suffolk",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/suffolk.jpg",
      desc: "SUNY Suffolk’s campuses stretch across Long Island, offering a world of opportunity in a beautiful coastal setting. It’s where you can start your journey close to home but go just about anywhere.",
    },
    {
      name: "SUNY Sullivan",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/sullivan.jpg",
      desc: "In the Catskills, SUNY Sullivan offers a personalized college experience, blending outdoor adventure with academic exploration. It’s a place where you can be yourself and find your path in a supportive community.",
    },
    {
      name: "SUNY Polytechnic",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/sunypoly.jpg",
      desc: "SUNY Polytechnic is where technology and innovation intersect, offering cutting-edge programs in Utica and Albany. If you’re driven by discovery and a desire to shape the future, SUNY Poly is your playground.",
    },
    {
      name: "SUNY Tompkins Cortland",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/tompkinscortland.jpg",
      desc: "Nestled in the heart of Central New York, SUNY Tompkins Cortland (TC3) is all about creating connections. With a focus on sustainability and community, it’s where you can live your values and advance your academic goals.",
    },
    {
      name: "SUNY Ulster",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/ulster.jpg",
      desc: "SUNY Ulster offers a serene campus setting in the Hudson Valley, perfect for focusing on your studies and exploring your interests. It’s a community where you’re encouraged to be yourself and chart your own course.",
    },
    {
      name: "SUNY Upstate",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/upstate.jpg",
      desc: "At the forefront of medical education, SUNY Upstate is where healthcare heroes are born. Located in Syracuse, it offers unparalleled opportunities in medical research, patient care, and community service.",
    },
    {
      name: "SUNY Westchester",
      imageUrl:
        "https://www.suny.edu/media/suny/content-assets/images/campus-profiles/logos/westchester.jpg",
      desc: "In the vibrant Westchester County, SUNY Westchester is a gateway to endless possibilities. With innovative programs and a diverse community, it’s the perfect place to start your journey towards a successful future.",
    },
  ];
  
  export { schoolData };
  