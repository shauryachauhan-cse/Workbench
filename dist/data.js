const EXERCISES = [
  {
    "id": "welding-1",
    "group": "welding",
    "level": 1,
    "title": "SMAW – Corner Joint",
    "description": "Understand the two faces and seam of a corner joint.",
    "aim": "Recognise the geometry of a shielded metal arc welded corner joint. The drawing is a conceptual view, without welding parameters.",
    "steps": [
      "Identify the two plate faces and their meeting edge.",
      "Locate the highlighted seam and sketch the corner geometry.",
      "Label the joint in your own drawing. Obtain actual welding settings and practice instructions from your instructor."
    ],
    "qa": [
      {
        "q": "What does SMAW stand for?",
        "a": "Shielded Metal Arc Welding."
      },
      {
        "q": "What does the highlighted line identify?",
        "a": "The meeting edge where the two plates are joined; it does not specify a weld size or operating setting."
      }
    ],
    "src": "diagrams/welding-1.svg",
    "minutes": 4
  },
  {
    "id": "welding-2",
    "group": "welding",
    "level": 2,
    "title": "Staircase Welding and Lighting Assembly",
    "description": "Connect a staircase model with a simple low-voltage lighting concept.",
    "aim": "Identify the structural steps, lighting positions and separate low-voltage circuit in a staircase assembly.",
    "steps": [
      "Identify the base, stair profile and marked lighting positions.",
      "Follow the separate battery, switch and light circuit shown in the lower schematic.",
      "Sketch the mechanical and electrical views separately. Ask your faculty which diagrams are required."
    ],
    "qa": [
      {
        "q": "Why show the lighting circuit separately?",
        "a": "It makes the electrical connections easier to distinguish from the staircase structure."
      },
      {
        "q": "Is the circuit a mains-wiring diagram?",
        "a": "No. It is a conceptual battery-powered light circuit and does not specify a rated practical installation."
      }
    ],
    "src": "diagrams/welding-2.svg",
    "minutes": 5
  },
  {
    "id": "welding-3",
    "group": "welding",
    "level": 3,
    "title": "Solar Based Power Generation System",
    "description": "Follow the flow of energy from a solar panel to a load.",
    "aim": "Identify a solar panel, controller, storage battery and load in a conceptual energy system.",
    "steps": [
      "Follow the connections from panel to controller, battery and load.",
      "Explain where sunlight is converted into electrical energy and where energy is stored.",
      "Redraw the block arrangement and label each component. Use only instructor-approved hardware and wiring instructions for a practical model."
    ],
    "qa": [
      {
        "q": "What is the role of the panel?",
        "a": "It converts incident light into electrical energy."
      },
      {
        "q": "What is the role of the battery in this example?",
        "a": "It stores energy for later use. The diagram does not specify battery chemistry, charging settings or component ratings."
      }
    ],
    "src": "diagrams/welding-3.svg",
    "minutes": 6
  },
  {
    "id": "carpentry-1",
    "group": "carpentry",
    "level": 1,
    "title": "Cross Halving Joint",
    "description": "See how two recessed wooden members overlap.",
    "aim": "Understand how complementary recesses permit two wooden strips to cross.",
    "steps": [
      "Locate the overlap region on both wooden members.",
      "Use the separated view to see the matching recesses.",
      "Sketch the joint and label each member. Take working dimensions and cutting instructions from your faculty."
    ],
    "qa": [
      {
        "q": "Why show an exploded view?",
        "a": "It exposes the recesses that become hidden when the members overlap."
      },
      {
        "q": "Does the sketch specify the notch depth?",
        "a": "No. A dimensioned drawing is needed before constructing a physical joint."
      }
    ],
    "src": "diagrams/carpentry-1.svg",
    "minutes": 4
  },
  {
    "id": "carpentry-2",
    "group": "carpentry",
    "level": 2,
    "title": "Wooden Robot Fabrication",
    "description": "Identify the head, body, limbs and joints of a wooden model.",
    "aim": "Distinguish the major wooden components and the pivot joints in a robot-shaped model.",
    "steps": [
      "Identify the body, head, two arms and two legs in the model.",
      "Mark the circular joints and distinguish them from the wooden members.",
      "Sketch the model and label its components. Confirm the required construction details with your faculty."
    ],
    "qa": [
      {
        "q": "What do the circles represent?",
        "a": "Simplified pivot connections between the model’s components."
      },
      {
        "q": "Does the model need to be powered?",
        "a": "A wooden model can be static or articulated. The actual experiment requirements depend on the faculty-approved design."
      }
    ],
    "src": "diagrams/carpentry-2.svg",
    "minutes": 5
  },
  {
    "id": "carpentry-3",
    "group": "carpentry",
    "level": 3,
    "title": "Motorized Robotic Arm Activation",
    "description": "Explore the links, pivot and motor in a simplified robotic arm.",
    "aim": "Identify the motor-driven pivot, arm links and end attachment of a simplified robotic arm.",
    "steps": [
      "Identify the base, motor, lower arm, upper arm and end attachment.",
      "Follow the arm from the driven pivot to the end attachment.",
      "Explain how turning one joint changes the arm pose. Treat the picture as a component diagram, not a circuit or control program."
    ],
    "qa": [
      {
        "q": "What is the motor’s role?",
        "a": "To provide rotational motion at a driven joint through a suitable connection."
      },
      {
        "q": "Is a motor alone a complete arm control system?",
        "a": "No. Power, mechanical coupling, control and suitable limits depend on the actual implementation."
      }
    ],
    "src": "diagrams/carpentry-3.svg",
    "minutes": 6
  },
  {
    "id": "sheet-metal-1",
    "group": "sheet-metal",
    "level": 1,
    "title": "Rectangular Tray Making",
    "description": "Relate a flat sheet layout to an open rectangular tray.",
    "aim": "Identify the base, four walls and fold lines of a conceptual rectangular tray.",
    "steps": [
      "Locate the central base and four surrounding flaps in the flat view.",
      "Match the dashed fold lines with the walls in the formed tray.",
      "Sketch both views. Real sheet-metal dimensions require thickness and bend information from your instructor."
    ],
    "qa": [
      {
        "q": "Which region becomes the tray base?",
        "a": "The central rectangle in the unfolded layout."
      },
      {
        "q": "Why can’t this flat net be used as a cutting template?",
        "a": "It has no dimensions, material thickness, bend allowance or joining details."
      }
    ],
    "src": "diagrams/sheet-metal-1.svg",
    "minutes": 4
  },
  {
    "id": "sheet-metal-2",
    "group": "sheet-metal",
    "level": 2,
    "title": "Mini Motorized Forklift Fabrication",
    "description": "Identify the separate components of a small forklift model.",
    "aim": "Study the chassis, wheels, mast and fork carriage before assembly.",
    "steps": [
      "Identify the separate chassis, wheels, mast and carriage in the component view.",
      "Compare their relative positions before joining them in a sketch.",
      "Prepare a labelled component list. Actual fabrication dimensions, fasteners and motor mounting must come from your approved drawing."
    ],
    "qa": [
      {
        "q": "What is the mast?",
        "a": "The upright structure associated with guiding the lifting carriage."
      },
      {
        "q": "Why use a separated component view?",
        "a": "It helps identify the parts and their relationships before studying the complete assembly."
      }
    ],
    "src": "diagrams/sheet-metal-2.svg",
    "minutes": 5
  },
  {
    "id": "sheet-metal-3",
    "group": "sheet-metal",
    "level": 3,
    "title": "Mini Motorized Forklift",
    "description": "Explore the assembled forklift and the path of its moving carriage.",
    "aim": "Identify how the carriage is guided by the mast in the assembled model.",
    "steps": [
      "Identify the wheels, mast, fork carriage and lifting direction on the assembled model.",
      "Separate the idea of vehicle movement from the vertical motion of the carriage.",
      "Draw the assembly and label the visible components. Confirm the motor and lift mechanism used in your actual model with your faculty."
    ],
    "qa": [
      {
        "q": "What supports the item being lifted?",
        "a": "The forks attached to the carriage in this conceptual model."
      },
      {
        "q": "Does this sketch establish a safe load?",
        "a": "No. Load capacity depends on the actual design, materials, stability and testing."
      }
    ],
    "src": "diagrams/sheet-metal-3.svg",
    "minutes": 6
  },
  {
    "id": "fitting-1",
    "group": "fitting",
    "level": 1,
    "title": "Step Fitting",
    "description": "Compare the complementary profiles of two stepped pieces.",
    "aim": "Identify a stepped projection and its complementary recess.",
    "steps": [
      "Trace the stepped profile on each of the two pieces.",
      "Compare the projection with the matching opening without assuming a physical fit.",
      "Sketch both profiles. A real fit must be checked against measured dimensions and specified clearances."
    ],
    "qa": [
      {
        "q": "What makes the profiles complementary?",
        "a": "The stepped projection on one piece corresponds to the recess on the other."
      },
      {
        "q": "Does a matching sketch guarantee a fit?",
        "a": "No. Actual dimensions, tolerances and inspection determine whether real parts fit."
      }
    ],
    "src": "diagrams/fitting-1.svg",
    "minutes": 4
  },
  {
    "id": "fitting-2",
    "group": "fitting",
    "level": 2,
    "title": "Scissor Lift Mechanism Fabrication and Assembly",
    "description": "Identify crossed links, pivots and the lift platform.",
    "aim": "Explain how crossed links and pivot connections form a scissor lift arrangement.",
    "steps": [
      "Identify the crossed links and their centre pivot.",
      "Locate the platform, base and end joints or sliding connections.",
      "Sketch the arrangement and explain its changing height. Actual travel and load limits require a dimensioned, supervised design."
    ],
    "qa": [
      {
        "q": "What connects the two crossed links?",
        "a": "A pivot at their crossing point in the simplified drawing."
      },
      {
        "q": "Does the diagram establish safe lifting capacity?",
        "a": "No. It illustrates component relationships, not structural capacity or certified operation."
      }
    ],
    "src": "diagrams/fitting-2.svg",
    "minutes": 5
  },
  {
    "id": "fitting-3",
    "group": "fitting",
    "level": 3,
    "title": "Fabrication and Assembly of a DC Motor-Driven Pulley Mechanism for Energy Conversion",
    "description": "Follow electrical and mechanical energy through a belt-and-pulley arrangement.",
    "aim": "Identify a driving motor, belt, driven pulley and generator in a conceptual energy-conversion arrangement.",
    "steps": [
      "Locate the driving DC motor, belt and driven shaft in the schematic.",
      "Follow the energy path: supply to motor, rotating belt transmission, then generator and load.",
      "Sketch and label the assembly. The layout is illustrative; motor ratings, pulley sizes, tension and wiring must follow your instructor’s specifications."
    ],
    "qa": [
      {
        "q": "What does the belt transmit?",
        "a": "Mechanical rotation between the driving and driven pulley shafts."
      },
      {
        "q": "Is the final electrical output equal to the electrical input?",
        "a": "No. Motor, transmission and generator losses mean the arrangement is not a source of free energy."
      }
    ],
    "src": "diagrams/fitting-3.svg",
    "minutes": 6
  }
];
