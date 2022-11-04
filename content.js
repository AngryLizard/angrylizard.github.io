contentObject = {
    categories:
    [
        {
            name: "Game Projects",
            description: "",
            projects:
            [
                {
                    identifier: "sillyGilly",
                    name: "Silly Gilly",
                    thumbnail: "./content/sillyGilly/slide3.gif",
                    slides:
                    [
                        {
                            content: "https://www.youtube.com/embed/YSnMshqg7-M",
                            caption: "Game project done in a team of 5 made in Monogame. In local multiplayer with up to 4 players the goal is to keep the Circus train going for as long as possible by fulfilling different tasks and making enough money during the performance phase when entering a city. In this project I've provided all the deferred rendering pipeline, rendering logic and graphics."
                        },
                        {
                            content: "./content/sillyGilly/slide3.gif",
                            caption: "To save time there are no animations bigger than 3 frames and are instead enhanced using mesh transformations."
                        },
                        {
                            content: "./content/sillyGilly/slide2.mp4",
                            caption: "There is a lot of platforming so movement has to feel good and snappy. Character deformation while running, falling or impact sells the movement."
                        },
                        {
                            content: "./content/sillyGilly/slide1.png",
                            caption: "All assets are organised in tilesets."
                        },
                        {
                            content: "./content/sillyGilly/slide4.gif",
                            caption: "A parallax shader makes the 2D assets look more 3D."
                        },
                        {
                            content: "./content/sillyGilly/slide5.png",
                            caption: "Shading is computed dynamically via compute shader using ray-marching."
                        },
                        {
                            content: "./content/sillyGilly/slide6.mp4",
                            caption: "Menu showcase"
                        },
                        {
                            content: "./content/sillyGilly/slide7.png",
                            caption: "Concept art showcase"
                        },
                    ]
                },
                {
                    identifier: "yoYoAdventure",
                    name: "YoYo's Adventure",
                    thumbnail: "./content/yoYoAdventure/slide1.jpg",
                    slides:
                    [
                        {
                            content: "./content/yoYoAdventure/slide1.jpg",
                            caption: "One month long Gamejam project, platformer with interactive elements. I was responsible for the movement system, animations and gameplay mechanics. None of the assets shown were made by me."
                        },
                        {
                            content: "./content/yoYoAdventure/slide2.gif",
                            caption: "Uses custom movement system with a simple animation controller."
                        },
                        {
                            content: "./content/yoYoAdventure/slide3.gif",
                            caption: "Simple jump and double (crouch) jump."
                        },
                        {
                            content: "./content/yoYoAdventure/slide4.mp4",
                            caption: "Interactable objects using a hand cursor model."
                        },
                        {
                            content: "./content/yoYoAdventure/slide5.jpg",
                            caption: "Movement based obstacles such as a custom gravity field."
                        },
                        {
                            content: "./content/yoYoAdventure/slide6.mp4",
                            caption: "Enemy character that pushes the player away."
                        },
                    ]
                },
                {
                    identifier: "planeGame",
                    name: "Plane Game",
                    thumbnail: "./content/planeGame/slide3.png",
                    slides:
                    [
                        {
                            content: "./content/planeGame/slide2.mp4",
                            caption: "Gamejam project with a flying plane made in Unity. I was in charge of the plane movement and animation logic. This system simulates plane lift and stalling while moving organically. Assets shown in this project were not created by me."
                        },
                        {
                            content: "./content/planeGame/slide1.mp4",
                            caption: "Parallaxed perlin-noise based cloud shader and background to better convey velocity."
                        },
                    ]
                },
            ],
        },
        {
            name: "Unreal Engine Projects",
            description: "Notable projects done in Unreal Engine and C++.",
            projects:
            [
                {
                    identifier: "customMovement",
                    name: "Custom Movement",
                    thumbnail: "./content/customMovement/slide11.gif",
                    slides:
                    [
                        {
                            content: "./content/customMovement/slide11.gif",
                            caption: "Custom movement system based on symplectic euler and mass-spring systems. This makes movement more smooth and properly simulates environmental conditions. Most meshes/characters shown in this project were not created by me."
                        },
                        {
                            content: "./content/customMovement/slide9.mp4",
                            caption: "The system uses a modular approach to movement modes. Swimming or climbing are objects added to the character and trigger according to priority and conditionals. With this we can very easily add custom movement behaviour e.g. when the character can fly, uses a jetpack or stands on a skateboard."
                        },
                        {
                            content: "./content/customMovement/slide10.gif",
                            caption: "Movement conditions usually depend on environmental values. There is no \"is swimming\" boolean, instead we check via the bouyancy equation whether we're floating."
                        },
                        {
                            content: "./content/customMovement/slide6.mp4",
                            caption: "The character core is moved using symplectic euler simulation. As a result there can be custom gravity fields and moving bases. For example a spinning planet with a ring: The planet applies gravity but at the same time the character is pulled away by centripetal force."
                        },
                        {
                            content: "./content/customMovement/slide1.mp4",
                            caption: "Movement is based on character weight, volume and anatomy (leg length etc). As a result, the controlled character can be scaled or a heavy object attached and movement changes accordingly. "
                        },
                        {
                            content: "./content/customMovement/slide2.mp4",
                            caption: "Characters can attach to another character and is not just affected by the parent's velocity but relative acceleration. If the parent starts moving the attached character leans against the inpending forces and falls off."
                        },
                        {
                            content: "./content/customMovement/slide5.gif",
                            caption: "The character's core being physically simulated we can easily apply external forces and make the characters react to outside influences such as another character, attached objects or wind."
                        },
                        {
                            content: "./content/customMovement/slide3.mp4",
                            caption: "With different movement modes there can also be locked attachment. One example is a character holding another. Relative acceleration applies to an attached object all the same and can be used for camera controls to simulate dizziness."
                        },
                        {
                            content: "./content/customMovement/slide4.mp4",
                            caption: "The system supports full network replication with server authority or client authority. It uses the same mechanic as the default Unreal Engine Movement component: To prevent rubberbanding all clients store past moves and replay them once there is an update from the server."
                        },
                        {
                            content: "./content/customMovement/slide7.mp4",
                            caption: "The system is agnostic over what kind of force generates gravity. It could be an actual gravity field, an accelerating platform or centripetal force."
                        },
                        {
                            content: "./content/customMovement/slide8.gif",
                            caption: "An approximation of the character's surface area as well as the surrounding substance density is used to apply drag."
                        },
                    ]
                },
                {
                    identifier: "characterCustomisation",
                    name: "Character Customisation",
                    thumbnail: "./content/characterCustomisation/slide4.gif",
                    slides:
                    [
                        {
                            content: "./content/characterCustomisation/slide4.gif",
                            caption: "For our game project we built an extensive customisation system that both customises the actual character mesh and animations. Most assets seen in this project were not made by me."
                        },
                        {
                            content: "./content/characterCustomisation/slide2.gif",
                            caption: "Anatomy is customised by changing the initial transform of the bones. This can be leg or arm lengths up to changes in posture or even species."
                        },
                        {
                            content: "./content/characterCustomisation/slide13.mp4",
                            caption: "We end up with many different bodytypes which we didn't want to all make individual animations for. We developed a retargeting system that uses an intermediate skeleton. Here we're baking animations from a Mixamo asset to our intermediate skeleton."
                        },
                        {
                            content: "./content/characterCustomisation/slide10.mp4",
                            caption: "At runtime, the intermediate skeleton plays the animation and is retargeted to our customised skeleton. The retargeting happens in a way that the ground and relative velocity stays the same. Animation interpolation is applied to our intermediate skeleton, reducing undesired artifacts."
                        },
                        {
                            content: "./content/characterCustomisation/slide5.gif",
                            caption: "Using this system we can change a character's anatomy even at runtime and still use the same animations."
                        },
                        {
                            content: "./content/characterCustomisation/slide7.mp4",
                            caption: "Anatomy changes such as leg length are also respected by our movement system and corrections are made using IK. Here the length and movement ability of different extremities are represented as oval cones."
                        },
                        {
                            content: "./content/characterCustomisation/slide6.mp4",
                            caption: "Customisations are applied using skeletal mesh manipulations and merging. The skin is adapted using render targets with layers of coloured textures."
                        },
                        {
                            content: "./content/characterCustomisation/slide3.mp4",
                            caption: "Using a baked position map we project patches onto the character for tattoos."
                        },
                    ]
                },
                {
                    identifier: "characterRigging",
                    name: "Character Rigging",
                    thumbnail: "./content/characterRigging/slide4.jpg",
                    slides:
                    [
                        {
                            content: "./content/characterRigging/slide11.jpg",
                            caption: "With the new Unreal Engine Control Rig system came the ability to make custom animation rigs using C++. Most aspects of the showcased rig were done using custom tools, such as custom leg IK, arm IK and spine IK. Only the character mesh seen in this picture has been created by me."
                        },
                        {
                            content: "./content/characterRigging/slide6.mp4",
                            caption: "The spine of this character uses a modification of FABRIK (Forward and Backward Reaching IK) that makes them stretch and bend. Only inputs needed are head and pelvis location, which allows for less specific chest movement but is much faster to animate."
                        },
                        {
                            content: "./content/characterRigging/slide7.mp4",
                            caption: "The arm IK takes the clavicle bone into consideration and moves the sholder with the arm then reaching up or sideways. A twist bone modifier makes sure that the wrist properly rotates with the hand without shrinking."
                        },
                        {
                            content: "./content/characterRigging/slide1.mp4",
                            caption: "An eyelid solver allows for full control over emotions but also takes the pupil location into consideration. The pupils dilate when the eyes are closed."
                        },
                        {
                            content: "./content/characterRigging/slide3.mp4",
                            caption: "A special hand and finger solver automatically adapts the hand to any ellipsoidal object. Ellipsoids can represent flat surfaces, round surfaces and handles."
                        },
                        {
                            content: "./content/characterRigging/slide5.mp4",
                            caption: "The solver uses a fast ellispoid collision algorithm that determines the nearest line along an axis touching the ellipsoid. The solver is analytic and cheap enough that applying it to all fingers and toes does not yield unreasonable performance loss."
                        },
                        {
                            content: "./content/characterRigging/slide12.mp4",
                            caption: "The same system can also be used for toes to handle different terrain conditions such as standing on a pole or flat surface."
                        },
                        {
                            content: "./content/characterRigging/slide2.mp4",
                            caption: "All beforementioned modifiers and some smaller qualitiy-of-life improvements make this rig very easy and fast to animate."
                        },
                        {
                            content: "./content/characterRigging/slide10.mp4",
                            caption: "Showcase of a full locomotion system using this rig. This is a simple 2D animation blend and some procedural modifications for foot step collision and leaning."
                        },
                        {
                            content: "./content/characterRigging/slide8.mp4",
                            caption: "Raptor-like character for a different project (assets not created by me) that was animated using the same rigging tools."
                        },
                        {
                            content: "./content/characterRigging/slide9.mp4",
                            caption: "Quadruped character for a different project (assets not created by me) that was animated using the same rigging tools."
                        },
                    ]
                },
                {
                    identifier: "aiSight",
                    name: "Sight Navigation",
                    thumbnail: "./content/aiSight/slide3.gif",
                    slides:
                    [
                        {
                            content: "./content/aiSight/slide5.gif",
                            caption: "Usually AI navigates through a level using nav-mesh, but we needed obstacle detection that worked for more dynamic situations (and upsite down). This system does line-traces every X ticks to survey the environment and keeps track of obstacles it found."
                        },
                        {
                            content: "./content/aiSight/slide4.gif",
                            caption: "Obstacles are modelled as boxes and are determined using singular value decomposition (resp. power iteration) over traced point clouds. Detected points decay over time."
                        },
                        {
                            content: "./content/aiSight/slide3.gif",
                            caption: "Detected points on moving objects stick on the object and track average velocity for obstacle avoidance."
                        },
                        {
                            content: "./content/aiSight/slide6.gif",
                            caption: "Fairly naive obstacle avoidance using heuristics. NPCs try to keep their path away from detected targets while aiming towards the desired movement target. This algorithm doesn't do any pathing since only immediate sight is known."
                        },
                        {
                            content: "./content/aiSight/slide1.mp4",
                            caption: "Behaves well for moving obstacle avoidance. The algorithm takes own and obstacle velocity into consideration and tries to turn away from impending collisions."
                        },
                        {
                            content: "./content/aiSight/slide2.mp4",
                            caption: "While often less reliable, sight-based navigation works for a lot of movement modes and environments where nav-mesh would fail completely."
                        },
                    ]
                },
                {
                    identifier: "interactionSystem",
                    name: "Interaction System",
                    thumbnail: "./content/interactionSystem/slide5.gif",
                    slides:
                    [
                        {
                            content: "./content/interactionSystem/slide4.mp4",
                            caption: "Fully modular action system that focuses on player interactions with different bodyparts and sockets. The player opens interaction mode where they select a target to interact with. Targets are attached objects that can describe anything like a point, spline or surface. Actions have full replication support for scheduling, inputs and custom variables."
                        },
                        {
                            content: "./content/interactionSystem/slide5.gif",
                            caption: "Sockets are an extension of targets that can hold other objects, which could be items or even other players if the socket allows it. In this showcase the player doesn't have access to their inventory and has to place a second item in their mouth to be able to carry both items to the research station."
                        },
                        {
                            content: "./content/interactionSystem/slide1.mp4",
                            caption: "Interactions between characters are also done via targets and sockets, injecting a procedural response for different bodyparts if interacted with."
                        },
                        {
                            content: "./content/interactionSystem/slide2.mp4",
                            caption: "An achievement system tracks the progress of the player and rewards them with unlocks if their current task is fulfilled. All game systems record stats the achievements can be evaluated with, such as \"meters walked\" or \"degrees turned\". The achievement tree is generated procedurally on a 2D grid using an algorithm similar to A* search."
                        },
                        {
                            content: "./content/interactionSystem/slide3.gif",
                            caption: "Characters have stats (such as health or stamina) that are affected by external forces such as items being consumed or damage taken. If the stats reach a certain threshold a buff/debuff is applied to the character that impact them in some way, for example slower movement or specific actions being unavailable while active."
                        },
                    ]
                },
                {
                    identifier: "meshTools",
                    name: "Spline Mesh Tools",
                    thumbnail: "./content/meshTools/slide11.gif",
                    slides:
                    [
                        {
                            content: "./content/meshTools/slide9.mp4",
                            caption: "All of these tools use UE4's spline system to generate mesh for level- and object design. The tool showcased here creates a mesh between two splines and warps it according to a set of curves."
                        },
                        {
                            content: "./content/meshTools/slide5.mp4",
                            caption: "Using singular value decomposition (power iteration) tiles are positioned on the mesh vertices in a way that respects the mesh flow. Using a diverse enough tileset this provides an easy way to create walls and caves."
                        },
                        {
                            content: "./content/meshTools/slide1.mp4",
                            caption: "Holes can be added to the mesh to create cave entrances."
                        },
                        {
                            content: "./content/meshTools/slide4.mp4",
                            caption: "Another tool that creates a triangulation on a closed spline loop. This algorithm supports concave boundaries. If the boundary isn't linear, more vertices are added based on curvature."
                        },
                        {
                            content: "./content/meshTools/slide2.mp4",
                            caption: "Delaunay triangulation for less mesh strain if desired."
                        },
                        {
                            content: "./content/meshTools/slide3.mp4",
                            caption: "Similar to the first tool, but the mesh isn't sparce. Instead edgeloops are created where the source curve has turns and corners."
                        },
                        {
                            content: "./content/meshTools/slide7.mp4",
                            caption: "Most mesh tools support generating LOD meshes."
                        },
                        {
                            content: "./content/meshTools/slide10.mp4",
                            caption: "System that automatically organises a selection of spline meshes along a spline in an interesting way."
                        },
                    ]
                },
                {
                    identifier: "misc",
                    name: "Misc",
                    thumbnail: "./content/misc/slide2.gif",
                    slides:
                    [
                        {
                            content: "./content/misc/slide1.mp4",
                            caption: "Game loading system that saves and loads the whole world, allowing to open different profiles. The save-system is custom and reloads as few assets as possible, making loading another profile seamless. World system that consists of multiple dimensions that can be travelled between seamlessly. Dimensions with players remain loaded on the server, clients don't need to all be in the same dimension."
                        },
                        {
                            content: "./content/misc/slide2.gif",
                            caption: "Fully moddable and serializable content system. Content can be added or removed from the game at runtime. In Multiplayer, the server informs all clients about which mods are loaded in what order and only allows clients to join that have the required mods installed. Already loaded content can be modified by other mods."
                        },
                        {
                            content: "./content/misc/slide3.mp4",
                            caption: "Custom deterministic rigid body solver that allows more stable behavious in multiplayer. Only supports sphere primitives but properly handles multi-impact resolution."
                        },
                        {
                            content: "./content/misc/slide4.mp4",
                            caption: "Snap-aiming using polynomial interpolation."
                        },
                    ]
                }
            ]
        },
        {
            name: "Developer Tools",
            description: "Over the years I have written several developer tools for different platforms. These are the more noteable projects that have gone beyond 'Can you write me a quick python script to do X?'",
            projects:
            [
                {
                    identifier: "gradientDecomposition",
                    name: "Gradient Decomposition",
                    thumbnail: "./content/gradientDecomposition/slide1.png",
                    slides:
                    [
                        {
                            content: "./content/gradientDecomposition/slide1.png",
                            caption: "Input consists of an input map and several heat maps, splits them into gradients and greyscale mapping. The grayscale maps encode the X position in the respective gradient. The gradients are created in a way to put neighbouring colours on the map next to each other on the gradient (using GMM analysis from scipy). The greyscale maps can be packed into colour channels and the gradients can be swapped ingame to procedurally change the terrain's colour. The gradient Y value is given by terrain shading (occlusion mapping)."
                        },
                    ]
                },
                {
                    identifier: "blenderUI",
                    name: "Blender Rigging UI",
                    thumbnail: "./content/blenderUI/slide1.png",
                    slides:
                    [
                        {
                            content: "./content/blenderUI/slide1.png",
                            caption: "Custom UI tool for Blender to select bones of a character rig. It allows drawing convex shapes for buttons (with grid/mirror tools) and stores them in the Blender file for later use. None of the assets shown were made by me."
                        },
                    ]
                },
                {
                    identifier: "lslMenu",
                    name: "LSL Character Menu",
                    thumbnail: "./content/lslMenu/slide1.png",
                    slides:
                    [
                        {
                            content: "./content/lslMenu/slide1.png",
                            caption: "Modular character menu system made for Second Life in the very limited LSL syntax. Supports colours, bars, combo boxes and asset selection. Can load multiple layers and save states. None of the assets shown were made by me."
                        },
                    ]
                },
            ]
        },
        {
            name: "Academic",
            description: "Coursework and thesis projects around the topic of Visual Computing. Focus on physics simulation and robotics.",
            projects:
            [
                {
                    identifier: "locomotion",
                    name: "Locomotion Using IPC",
                    thumbnail: "./content/locomotion/slide1.gif",
                    slides:
                    [
                        {
                            content: "./content/locomotion/slide1.gif",
                            caption: "Master thesis at ETHZ: Real-Time Locomotion Using Simplified Dynamic Models"
                        },
                        {
                            content: "./content/locomotion/slide2.gif",
                            caption: "Inverted Pendulum on a Cart (IPC) is used to generate the general trajectory of the pelvis. Using trajectory optimization the trajectory is matched to footstep generation."
                        },
                        {
                            content: "./content/locomotion/slide3.gif",
                            caption: "Foot step generation uses a mirrored sigmoid curve for the step, step patter is user definable."
                        },
                        {
                            content: "./content/locomotion/slide4.gif",
                            caption: "Trajectory of pelvis is optimized so that the character's Center of Pressure (average location of where force is applied) is always inside the support polygon (polygon spanned by the character's feet)."
                        },
                        {
                            content: "./content/locomotion/slide5.gif",
                            caption: "Foot trajectory can be optimized to avoid certain points on the terrain (marked in red)."
                        },
                        {
                            content: "./content/locomotion/slide6.gif",
                            caption: "Proceduarally generated foot-roll is also taken into consideration for the support polygon."
                        },
                        {
                            content: "./content/locomotion/slide7.gif",
                            caption: "The system can generally be applied to different leg configurations."
                        },
                        {
                            content: "./content/locomotion/slide8.pdf",
                            caption: "Thesis paper."
                        },
                    ]
                },
                {
                    identifier: "bendy",
                    name: "Bendy Print",
                    thumbnail: "./content/bendy/slide1.jpg",
                    slides:
                    [
                        {
                            content: "./content/bendy/slide1.jpg",
                            caption: "Project at ETHZ where I wrote a custom slicer and gcode generator for 3D filament printers."
                        },
                        {
                            content: "./content/bendy/slide2.jpg",
                            caption: "When only printing a few layers, filament prints can be bend. Bending behaviour is very different depending on the pattern being printed."
                        },
                        {
                            content: "./content/bendy/slide3.jpg",
                            caption: "Custom slicer that generates gcode for any input polygon. Slices are determined via a scanline algorithm and separated into areas to reduce number of nozzle jumps."
                        },
                        {
                            content: "./content/bendy/slide4.jpg",
                            caption: "After unwrapping a mesh (greedy algorithm) it can be sliced into shells where the mesh edges are thinner than the faces. The resulting print can be folded back to the original shape."
                        },
                        {
                            content: "./content/bendy/slide5.jpg",
                            caption: "FEM solver to calibrate, then simulate bending behaviour for different print patterns (WIP)."
                        },
                        {
                            content: "./content/bendy/slide7.pdf",
                            caption: "Project paper."
                        },
                    ]
                },
                {
                    identifier: "fullBody",
                    name: "Full Body IK",
                    thumbnail: "./content/fullBody/thumb.jpg",
                    slides:
                    [
                        {
                            content: "./content/fullBody/slide1.webm",
                            caption: "Bachelor thesis at ETHZ: Custom Real-time full body IK based on Newton's method. External variables (such as slope) are used to adapt the pose."
                        },
                        {
                            content: "./content/fullBody/slide2.webm",
                            caption: "Procedural foot trajectory generation and footstep prediction."
                        },
                        {
                            content: "./content/fullBody/slide3.webm",
                            caption: "Works on any skeleton with any number of legs (though ignores upper body)."
                        },
                        {
                            content: "./content/fullBody/slide4.pdf",
                            caption: "Thesis paper."
                        },
                    ]
                },
                {
                    identifier: "rigidBody",
                    name: "Rigid Body Simulation",
                    thumbnail: "./content/rigidBody/slide4.gif",
                    slides:
                    [
                        {
                            content: "./content/rigidBody/slide1.gif",
                            caption: "Custom rigid body simulation implemented in C++. A cheap broad-phase allows for many boxes to be simulated in real time."
                        },
                        {
                            content: "./content/rigidBody/slide2.gif",
                            caption: "Collision detection using GJK (support function), proper friction and inertia computation."
                        },
                        {
                            content: "./content/rigidBody/slide3.gif",
                            caption: "A mix between simultaneous contacts and iterative contacts allows impulse to travel through multiple objects and back. Speculative contacts minimize box intersections and make piles (mostly) stable even without physics sleep."
                        },
                        {
                            content: "./content/rigidBody/slide4.gif",
                            caption: "Mass-spring model (made by another student) can interact with the rigid body simulation."
                        },
                    ]
                },
            ]
        }
    ]
};