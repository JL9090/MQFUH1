// Final UH-1N MQF Quiz Script with post-review and feedback logic

const questions = [
  {
    "q": "Operating procedures, techniques, etc., which will result in personal injury or loss of life if not carefully followed.",
    "options": [
      "A. Warning",
      "B. Caution",
      "C. Note",
      "D. Shall or Will"
    ],
    "correct": "A. Warning",
    "qNum": 1
  },
  {
    "q": "Operating procedures, techniques, etc., which will result in damage to equipment if not carefully followed.",
    "options": [
      "A. Warning",
      "B. Caution",
      "C. Note",
      "D. Should"
    ],
    "correct": "B. Caution",
    "qNum": 2
  },
  {
    "q": "An operating procedure, technique, etc., which is considered essential to emphasize.",
    "options": [
      "A. Warning",
      "B. Caution",
      "C. Note",
      "D. May"
    ],
    "correct": "C. Note",
    "qNum": 3
  },
  {
    "q": "Used only when application of a procedure is mandatory.",
    "options": [
      "A. Shall or Will",
      "B. Should",
      "C. May",
      "D. Warning"
    ],
    "correct": "A. Shall or Will",
    "qNum": 4
  },
  {
    "q": "Used only when application of a procedure is recommended.",
    "options": [
      "A. Shall or Will",
      "B. Should",
      "C. May",
      "D. Caution"
    ],
    "correct": "B. Should",
    "qNum": 5
  },
  {
    "q": "Used to indicate an acceptable or suggested means of accomplishment.",
    "options": [
      "A. Shall or Will",
      "B. Should",
      "C. May",
      "D. Note"
    ],
    "correct": "C. May",
    "qNum": 6
  },
  {
    "q": "(Engine Fuel Control Units) When operating in AUTO, it is possible to exceed maximum _____.",
    "options": [
      "A. Ng and Nf only.",
      "B. Q only.",
      "C. ITT only.",
      "D. Ng, Nf, Q, and ITT"
    ],
    "correct": "D. Ng, Nf, Q, and ITT",
    "qNum": 7
  },
  {
    "q": "(Engine Fuel Control Units) When operating in MANUAL, it is possible to overspeed the _________, and to exceed ______.",
    "options": [
      "A. Ng turbine and Nf turbine,",
      "B. Ng turbine and Nf turbine, Q",
      "C. Ng turbine, ITT",
      "D. Ng turbine and Nf turbine, ITT or Q"
    ],
    "correct": "D. Ng turbine and Nf turbine, ITT or Q",
    "qNum": 8
  },
  {
    "q": "(Droop Compensator) When the rivet is sheared, the droop compensator is inoperative. The Nf governors will still control Nf RPM, but transient droop/overspeed and recovery time will increase. Collective adjustments should be ______ to prevent rotor decay or overspeeds.",
    "options": [
      "A. increased",
      "B. slow",
      "C. rapid",
      "D. precise"
    ],
    "correct": "B. slow",
    "qNum": 9
  },
  {
    "q": "(Governor Switch) It is possible to have a GOV MANUAL light and still be in the automatic mode if a malfunction exists in the ________.",
    "options": [
      "A. fuel control valve",
      "B. solenoid",
      "C. wiring",
      "D. all of the above"
    ],
    "correct": "D. all of the above",
    "qNum": 10
  },
  {
    "q": "(Pilot Override Switch) With the pilot override switch in the ____ position, it is possible to engage both starters simultaneously. This should not be attempted as an extreme voltage drain will occur possibly causing destruction of the aircraft battery.",
    "options": [
      "A. OFF",
      "B. ON",
      "C. AUTO",
      "D. START"
    ],
    "correct": "A. OFF",
    "qNum": 11
  },
  {
    "q": "(Rotor System) If _____ TEMP-PLATES are defective then a potential over-temp condition needs to be investigated. Do not fly and make an entry in the AFTO 781A.",
    "options": [
      "A. one",
      "B. both",
      "C. right",
      "D. left"
    ],
    "correct": "B. both",
    "qNum": 12
  },
  {
    "q": "(Collective Pitch Control Lever) The collective has a built in friction which requires a force to move the stick up from the neutral (center of travel) position of _____ to _____ pounds with boost ON.",
    "options": [
      "A. 2, 4",
      "B. 5, 10",
      "C. 8, 10",
      "D. 11, 14"
    ],
    "correct": "C. 8, 10",
    "qNum": 13
  },
  {
    "q": "(Fuel System Caution Panel) Do not press and hold the ________ switch.",
    "options": [
      "A. DAY LT BRT/DIM",
      "B. BIT",
      "C. ZERO CAL",
      "D. LAMP TEST"
    ],
    "correct": "C. ZERO CAL",
    "qNum": 14
  },
  {
    "q": "(RPM Warning System) The RPM warning light on the instrument panel illuminates whenever Nr drops below _____% \u00b12 or exceeds _____% \u00b12. Also, when either engine Ng speed drops below _____% \u00b12.",
    "options": [
      "A. 92, 103, 52",
      "B. 103, 92, 52",
      "C. 52, 92, 103",
      "D. 52, 103, 92"
    ],
    "correct": "A. 92, 103, 52",
    "qNum": 15
  },
  {
    "q": "(Wire Strike Protection System) During takeoff and at any time the helicopter skids are close to the ground (nose low at _____\u00b0 or more) can result in ground contact of the WSPS lower cutter tip.",
    "options": [
      "A. 7",
      "B. 8",
      "C. 10",
      "D. 12"
    ],
    "correct": "C. 10",
    "qNum": 16
  },
  {
    "q": "(Exterior Inspection) Accumulation of __________ will be removed prior to flight. Failure to do so can result in hazardous flight, due to aerodynamic and center of gravity disturbances.",
    "options": [
      "A. snow and ice",
      "B. dirt and grass",
      "C. static electricity",
      "D. water"
    ],
    "correct": "A. snow and ice",
    "qNum": 17
  },
  {
    "q": "(Exterior Inspection) The rotor blade skin will be inspected for __________. All suspected damage will be inspected by maintenance personnel to determine the extent of damage.",
    "options": [
      "A. dents",
      "B. creases and skin delamination",
      "C. corrosion",
      "D. all of the above"
    ],
    "correct": "D. all of the above",
    "qNum": 18
  },
  {
    "q": "(Interior Inspection and Before Start) When moving the collective without hydraulic assist, grip the collective __________ to avoid stress in the area between the throttles.",
    "options": [
      "A. at the collective switch box",
      "B. at the number one throttle",
      "C. at the number two throttle",
      "D. at the throttles"
    ],
    "correct": "D. at the throttles",
    "qNum": 19
  },
  {
    "q": "(Interior Inspection and Before Start) Battery starts with static voltage below _____ volts may result in a hot start. Battery starts should not be attempted with voltage below _____ volts.",
    "options": [
      "A. 20, 20",
      "B. 20, 23.5",
      "C. 23.5, 20",
      "D. 23.5, 23.5"
    ],
    "correct": "C. 23.5, 20",
    "qNum": 20
  },
  {
    "q": "(Interior Inspection and Before Start) If external power voltage exceeds _____ volts turn off external power immediately, adjust the APU to provide lower voltage. Damage to the aircraft electrical system could occur at voltages above _____ volts.",
    "options": [
      "A. 29.5, 29.5",
      "B. 23.5, 23.5",
      "C. 20, 20",
      "D. None of the Above"
    ],
    "correct": "A. 29.5, 29.5",
    "qNum": 21
  },
  {
    "q": "(Starting Engines) To preclude possible hearing loss, ensure all personnel within _____ feet of the aircraft wear hearing protection.",
    "options": [
      "A. 20",
      "B. 30",
      "C. 10",
      "D. 45"
    ],
    "correct": "B. 30",
    "qNum": 22
  },
  {
    "q": "(Starting Engines) If ITT exceeds _____\u00b0 C, move the throttle to OFF.",
    "options": [
      "A. 770",
      "B. 810",
      "C. 870",
      "D. 1090"
    ],
    "correct": "D. 1090",
    "qNum": 23
  },
  {
    "q": "(Starting Engines) ITT above _____\u00b0 C shall be monitored during start and if time exceeds limits shown in Figure 5-1 (Engine Overtemperature - Starting), a hot start has occurred.",
    "options": [
      "A. 770",
      "B. 810",
      "C. 870",
      "D. 1090"
    ],
    "correct": "C. 870",
    "qNum": 24
  },
  {
    "q": "(Starting Engines) For a hot start or impending overtemp, continue to motor the engine until________. If any limits are exceeded, annotate in the AFTO 781A.",
    "options": [
      "A. 30 seconds have passed",
      "B. ITT decreases to within normal operating limits",
      "C. ITT decreases to within caution range of operating limits",
      "D. 15 seconds have passed"
    ],
    "correct": "B. ITT decreases to within normal operating limits",
    "qNum": 25
  },
  {
    "q": "(Starting Engines) During cold weather start it is permissible for oil pressure to reach _____ PSI maximum transient during throttle sequence for _____ seconds.",
    "options": [
      "A. 150, 10",
      "B. 150, 30",
      "C. 112, 10",
      "D. 112, 30"
    ],
    "correct": "A. 150, 10",
    "qNum": 26
  },
  {
    "q": "(Starting Engines) The start must be terminated if ITT fails to rise within _____ seconds after opening the throttle.",
    "options": [
      "A. 5",
      "B. 15",
      "C. 20",
      "D. 30"
    ],
    "correct": "B. 15",
    "qNum": 27
  },
  {
    "q": "(Before Taxi) Pull pedestal cooling control knob out when temperature is at or above _____ \u00b0C. If the OAT is more than _____ \u00b0 C, the vent blower should also be turned on. At least one of the two intake control valves must be open in order for cool air to reach the center pedestal.",
    "options": [
      "A. 5, 10",
      "B. 10, 5",
      "C. 19, 29",
      "D. 29, 19"
    ],
    "correct": "C. 19, 29",
    "qNum": 28
  },
  {
    "q": "(Taxi) Cockpit readings that do not agree with the computed torque readings (from Appendix A), but do not exceed plus _____% of computed values, may be considered acceptable. If cockpit torque readings differ from computed values by more than plus _____% for a five foot hover, check cockpit versus computed power for OGE hover. If the two agree within plus _____%, the aircraft may be flown provided OGE power is used for mission planning.",
    "options": [
      "A. 2",
      "B. 4",
      "C. 20",
      "D. None of the Above"
    ],
    "correct": "B. 4",
    "qNum": 29
  },
  {
    "q": "(Takeoff) The airspeed, vertical velocity and altimeter are unreliable below _____ because of the rotor downwash on the pitot static system. During takeoff, do not rely on these instruments until at least _____.",
    "options": [
      "A. IGE",
      "B. ETL",
      "C. OGE",
      "D. 30 KIAS"
    ],
    "correct": "D. 30 KIAS",
    "qNum": 30
  },
  {
    "q": "(Takeoff) If the aircraft cannot be stabilized at _________ hover without RPM bleed off, it is overloaded for the current conditions. Cargo and/or passengers should be off loaded until RPM remains normal. If the wind is at or above ETL, the operational value of the slide takeoff has been practically eliminated.",
    "options": [
      "A. a two foot",
      "B. a four foot",
      "C. an OGE",
      "D. None of the Above"
    ],
    "correct": "A. a two foot",
    "qNum": 31
  },
  {
    "q": "(After Landing) Maintain flight idle _____ minute prior to closing throttles to stabilize engine temperatures.",
    "options": [
      "A. one",
      "B. two",
      "C. five",
      "D. fifteen"
    ],
    "correct": "A. one",
    "qNum": 32
  },
  {
    "q": "(Emergency Procedures) The nature and environment of the emergency dictate that a landing be made without delay to assure survival of the occupants.",
    "options": [
      "A. Land Immediately",
      "B. Land As Soon As Possible",
      "C. Land As Soon As Practical",
      "D. None of the above"
    ],
    "correct": "A. Land Immediately",
    "qNum": 33
  },
  {
    "q": "(Emergency Procedures) The nature and environment of the emergency dictate that a landing be made at the first available area which will assure minimum injury to crew or minimum damage to the aircraft.",
    "options": [
      "A. Land Immediately",
      "B. Land As Soon As Possible",
      "C. Land As Soon As Practical",
      "D. None of the above"
    ],
    "correct": "B. Land As Soon As Possible",
    "qNum": 34
  },
  {
    "q": "(Emergency Procedures) The nature and environment of the emergency dictate that a landing be made at the first available area or landing site which will assure no injury to the crew or damage to the aircraft and provides acceptable access for corrective action.",
    "options": [
      "A. Land Immediately",
      "B. Land As Soon As Possible",
      "C. Land As Soon As Practical",
      "D. None of the above"
    ],
    "correct": "C. Land As Soon As Practical",
    "qNum": 35
  },
  {
    "q": "(Emergency Shutdown Procedures) Applying the rotor brake above _____% Nr will increase the tendency for the aircraft to spin on smooth surfaces.",
    "options": [
      "A. 10",
      "B. 20",
      "C. 30",
      "D. 40"
    ],
    "correct": "D. 40",
    "qNum": 36
  },
  {
    "q": "(Engine Fire on the Ground) If a fire pull handle was previously pulled, reset the handle prior to actuating the __________ switch.",
    "options": [
      "A. PART SEP",
      "B. INVERTER",
      "C. FIRE EXT",
      "D. BATTERY"
    ],
    "correct": "C. FIRE EXT",
    "qNum": 37
  },
  {
    "q": "(Lightning Strikes) When lightning is encountered at night, the interior and instrument lights should be turned to _____ intensity to preclude temporary blindness.",
    "options": [
      "A. full",
      "B. medium",
      "C. low",
      "D. none of the above"
    ],
    "correct": "A. full",
    "qNum": 38
  },
  {
    "q": "(Main Rotor Malfunctions) The severity of the malfunction and the risk associated with continued flight may require the pilot to __________.",
    "options": [
      "A. land as soon as practical",
      "B. land as soon as possible",
      "C. land immediately",
      "D. return to base"
    ],
    "correct": "C. land immediately",
    "qNum": 39
  },
  {
    "q": "(Loss of Pitch Control to One Blade) If loss of pitch control to one blade occurs: __________.",
    "options": [
      "A. return to base",
      "B. land as soon as practical",
      "C. land as soon as possible",
      "D. land immediately"
    ],
    "correct": "D. land immediately",
    "qNum": 40
  },
  {
    "q": "(Complete Loss of Tail Rotor Thrust) Tail rotor failure can put the aircraft in such an attitude with respect to the rotor disk and the natural horizon, that the pilot naturally tends toward _____ cyclic to correct the attitude. These cyclic inputs combined with aircraft attitude can exceed the 11\u00b0 flapping angle and induce mast bumping.",
    "options": [
      "A. left forward",
      "B. right rear",
      "C. right forward",
      "D. left rear"
    ],
    "correct": "B. right rear",
    "qNum": 41
  },
  {
    "q": "(Complete Loss of Tail Rotor Thrust (Uncontrollable) ) At airspeeds below _____ knots, controllability is doubtful and entering autorotation is the only means to recover the aircraft. In a hover, immediately retard throttles to flight idle, maintain level attitude and make an autorotational landing.",
    "options": [
      "A. 30",
      "B. 40",
      "C. 50",
      "D. 60"
    ],
    "correct": "D. 60",
    "qNum": 42
  },
  {
    "q": "(Complete Loss of Tail Rotor Thrust (Uncontrollable) ) The inadvertent application of power at touchdown could have catastrophic results. PRIOR TO THE _____, ROTATE THROTTLES OFF. This will eliminate the possibility of inadvertent throttle input prior to touchdown.",
    "options": [
      "A. FLARE",
      "B. GO-AROUND",
      "C. POWER RECOVERY",
      "D. LANDING"
    ],
    "correct": "A. FLARE",
    "qNum": 43
  },
  {
    "q": "(Complete Loss of Tail Rotor Thrust (Uncontrollable) ) Failure to maintain 60 knots until touchdown may result in an ________ and unrecoverable spin to the ____.",
    "options": [
      "A. controllable, left",
      "B. uncontrollable, right",
      "C. controllable, right",
      "D. uncontrollable, left"
    ],
    "correct": "B. uncontrollable, right",
    "qNum": 44
  },
  {
    "q": "(Engine Failure) During cruise, the _______________ could fail without recognition unless either a higher power setting is used or a single engine failure should occur.",
    "options": [
      "A. engine driven fuel pump",
      "B. automatic fuel control",
      "C. integrated valve and filter assembly",
      "D. none of the above"
    ],
    "correct": "B. automatic fuel control",
    "qNum": 45
  },
  {
    "q": "(Single Engine Failure Inflight) Prior to beginning the approach ensure power available is sufficient for the desired approach and possible _____.",
    "options": [
      "A. flare",
      "B. power recovery",
      "C. go-around",
      "D. landing"
    ],
    "correct": "C. go-around",
    "qNum": 46
  },
  {
    "q": "(Engine Oil System Malfunctions) Monitor the affected engine instruments and upon any indication of impending engine failure, refer to ____________________.",
    "options": [
      "A. DUAL ENGINE FAILURE",
      "B. ENGINE RESTART INFLIGHT (Automatic Start)",
      "C. ENGINE RESTART INFLIGHT (Manual Start)",
      "D. ENGINE SHUTDOWN INFLIGHT"
    ],
    "correct": "D. ENGINE SHUTDOWN INFLIGHT",
    "qNum": 47
  },
  {
    "q": "(Engine Shutdown Inflight) Ensure that the __________ caution light illuminates during shutdown. Failure of the particle separator door to close could prevent normal engine cool down and fuel/fume elimination. It may be necessary to position the particle separator switch to OFF to ensure door closure.",
    "options": [
      "A. HYD SYS",
      "B. OIL PRESSURE",
      "C. AC FAIL",
      "D. PART SEP OFF"
    ],
    "correct": "D. PART SEP OFF",
    "qNum": 48
  },
  {
    "q": "(Engine Restart Inflight) A failed engine should not be started inflight unless it can be determined that it is reasonably safe to do so. Before restarting engine inflight allow _____ seconds of gas generator coast down with throttle in the OFF position to purge the engine of fumes and fuel.",
    "options": [
      "A. 0",
      "B. 15",
      "C. 30",
      "D. 60"
    ],
    "correct": "C. 30",
    "qNum": 49
  },
  {
    "q": "(Engine Restart Inflight (Automatic/Manual Start) ) A relight should be obtained within 15 seconds and will be evidenced by a rise in _____ and _____.",
    "options": [
      "A. Ng, ITT",
      "B. Ng, fuel flow",
      "C. ITT, fuel flow",
      "D. fuel flow, amperage"
    ],
    "correct": "A. Ng, ITT",
    "qNum": 50
  },
  {
    "q": "(Dual Engine Failure) Nr can only be regained by lowering the collective and reducing the drag effect of the main rotor. Should the lowering of the collective be delayed and Nr decays below _____%, the main rotor blades will stall and Nr can never be regained.",
    "options": [
      "A. 88",
      "B. 83",
      "C. 78",
      "D. 71"
    ],
    "correct": "C. 78",
    "qNum": 51
  },
  {
    "q": "(Dual Engine Failure) Abrupt lowering of the collective and simultaneous forward movement of the cyclic during flight at high power can result in ____________________.",
    "options": [
      "A. a zero or negative \"G\" maneuver",
      "B. mast bumping",
      "C. loss of aircraft control",
      "D. all of the above"
    ],
    "correct": "D. all of the above",
    "qNum": 52
  },
  {
    "q": "(Dual Engine Failure) One of the most common errors is that of landing in a _____ attitude. This often results in such rapid \"nose down\" pitching that the main rotor strikes the tail boom. To avoid tail boom strikes by the main rotor, aft cyclic should not be applied after ground contact is made. Regardless of the force with which the helicopter strikes the ground, damage will be much less if it strikes level.",
    "options": [
      "A. \"tail high\"",
      "B. \"tail low\"",
      "C. \"positive\"",
      "D. \"negative\""
    ],
    "correct": "B. \"tail low\"",
    "qNum": 53
  },
  {
    "q": "(Engine Fire Inflight) Do not pull the fire handle with the fire extinguisher switch in any position but _____.",
    "options": [
      "A. MAIN",
      "B. RESERVE",
      "C. ON",
      "D. OFF"
    ],
    "correct": "D. OFF",
    "qNum": 54
  },
  {
    "q": "(Smoke and Fume Elimination) All unidentifiable odors shall be considered toxic. If airborne, _______________. Do not resume flight until source of odor is identified.",
    "options": [
      "A. return to base",
      "B. land as soon as practical",
      "C. land as soon as possible",
      "D. land immediately"
    ],
    "correct": "B. land as soon as practical",
    "qNum": 55
  },
  {
    "q": "(Fuel Control System Actuation) Confirm shift of fuel control by observing changes or fluctuations in __________.",
    "options": [
      "A. Ng",
      "B. ITT",
      "C. fuel flow",
      "D. All of the Above"
    ],
    "correct": "D. All of the Above",
    "qNum": 56
  },
  {
    "q": "(Fuel Control System Actuation) During an engine compressor stall, the possibility exists that extreme temperatures caused by a rapidly rising _____ may cause engine turbine blade damage resulting in engine failure. Additionally during compressor stalls, manually increasing fuel flow to correct for a low power condition may compound the _____ over temp condition.",
    "options": [
      "A. Ng",
      "B. ITT",
      "C. Nf",
      "D. Nr"
    ],
    "correct": "B. ITT",
    "qNum": 57
  },
  {
    "q": "(Main Driveshaft Failure) Rotor control is critical during MAIN DRIVE SHAFT FAILURE. _____ will immediately and rapidly decay, jeopardizing your ability to autorotate. It is imperative to react instantly and lower the collective to maintain _____. You must also be conscious of possibly inducing negative Gs/mast bumping with rapid collective reduction. (Refer to Main Rotor RPM Decay Rate, Figure 3-2).",
    "options": [
      "A. Ng",
      "B. ITT",
      "C. Nf",
      "D. Nr"
    ],
    "correct": "D. Nr",
    "qNum": 58
  },
  {
    "q": "(Main Driveshaft Failure) Due to the violent nature of this failure you can expect multiple emergencies to occur. Uncontrolled overspeeding _____ may result in explosive engine failures. Collateral damage to other components, including flight controls, can occur. No set procedure can be developed for compounding emergencies but in all cases, rotor control is critical.",
    "options": [
      "A. Ngs",
      "B. ITTs",
      "C. Nfs",
      "D. Nr"
    ],
    "correct": "C. Nfs",
    "qNum": 59
  },
  {
    "q": "(Electrical Power System Malfunction) _____ use a circuit breaker as a switch. Circuit breakers are to be pulled only when necessary to isolate a system during an emergency or for maintenance.",
    "options": [
      "A. Sometimes",
      "B. Always",
      "C. Never",
      "D. None of the Above"
    ],
    "correct": "C. Never",
    "qNum": 60
  },
  {
    "q": "(DC Generator Failure) If equipment powered by the __________ Bus is required, the Non-Essential Bus switch must be in the MANUAL position.",
    "options": [
      "A. NON ESS",
      "B. ESS",
      "C. MAIN",
      "D. BATTERY"
    ],
    "correct": "A. NON ESS",
    "qNum": 61
  },
  {
    "q": "(Hydraulic System Failure) There is a possibility that a partial or total loss of hydraulic power could be the result of an electrical short circuit to the solenoid operated shut-off valve. Pulling the _________ circuit breaker out may restore hydraulic power. If this procedure does not restore power, then the circuit breaker must be reset to restore the function of the Hydraulic Control Master Switch.",
    "options": [
      "A. HYD CONT",
      "B. MAIN INVTR",
      "C. STBY INVTR",
      "D. IDLE STOP"
    ],
    "correct": "A. HYD CONT",
    "qNum": 62
  },
  {
    "q": "(Crew and Passenger Briefing Guides) In typical configuration, the UH-1N has ___ fire extinguishers and ____ first aid kits.",
    "options": [
      "A. 2, 4",
      "B. 4, 2",
      "C. 3, 6",
      "D. 1, 6"
    ],
    "correct": "A. 2, 4",
    "qNum": 63
  },
  {
    "q": "(Instrument Markings) _____ markings indicate the limit above or below which continued operation will cause damage or shorten component life.",
    "options": [
      "A. Green",
      "B. Yellow",
      "C. Red",
      "D. None of the above"
    ],
    "correct": "C. Red",
    "qNum": 64
  },
  {
    "q": "(Instrument Markings) _____ markings indicate a safe or normal range of operation.",
    "options": [
      "A. Green",
      "B. Yellow",
      "C. Red",
      "D. None of the above"
    ],
    "correct": "A. Green",
    "qNum": 65
  },
  {
    "q": "(Instrument Markings) Flight with indications in the yellow range is __________.",
    "options": [
      "A. not recommended",
      "B. acceptable",
      "C. permissible for 5 minutes",
      "D. none of the above"
    ],
    "correct": "A. not recommended",
    "qNum": 66
  },
  {
    "q": "(Engine Limits) Duration of single engine operation above _____% Q must be entered in AFTO 781A.",
    "options": [
      "A. 88",
      "B. 83",
      "C. 78",
      "D. 71"
    ],
    "correct": "C. 78",
    "qNum": 67
  },
  {
    "q": "(ITT Fluctuation Limitations) Allowable ITT fluctuation is \u00b1_____\u00b0C, provided fluctuations are not rapid or erratic.",
    "options": [
      "A. 7",
      "B. 5",
      "C. 4",
      "D. 2"
    ],
    "correct": "B. 5",
    "qNum": 68
  },
  {
    "q": "(Transmission Limitations) Operation equal to or greater than _____% torque is limited to 5 minutes.",
    "options": [
      "A. 88",
      "B. 83",
      "C. 78",
      "D. 71"
    ],
    "correct": "A. 88",
    "qNum": 69
  },
  {
    "q": "(Transmission Limitations) Transient fluctuations up to \u00b1_____ PSI within the normal operating range are permissible provided the oil temperature remains normal.",
    "options": [
      "A. 2",
      "B. 4",
      "C. 5",
      "D. 7"
    ],
    "correct": "D. 7",
    "qNum": 70
  },
  {
    "q": "(Torque Splits) The maximum allowable steady state torque split between the number one and number two engine is _____%. Transient torque splits during power changes are not abnormal as long as torque needles remarry within 20 seconds.",
    "options": [
      "A. 2",
      "B. 4",
      "C. 5",
      "D. 7"
    ],
    "correct": "B. 4",
    "qNum": 71
  },
  {
    "q": "(CGB Oil Pressure Fluctuation Limitations) Allowable combining gear box oil pressure fluctuations are \u00b1_____ PSI within the normal operating range of __________ PSI. This fluctuation is acceptable if it occurs at mean indications of 60 or 85 PSI such that readings of 55 to 65 or 80 to 90 PSI are experienced.",
    "options": [
      "A. 5, 40 to 60",
      "B. 7, 40 to 60",
      "C. 5, 60 to 85",
      "D. 7, 60 to 85"
    ],
    "correct": "C. 5, 60 to 85",
    "qNum": 72
  },
  {
    "q": "(Engine Oil Pressure Fluctuation Limitations) Allowable oil pressure fluctuation is \u00b1_____ PSI, within the normal operating range of __________ PSI.",
    "options": [
      "A. 7, 40 to 80",
      "B. 7, 80 to 112",
      "C. 5, 40 to 80",
      "D. 5, 80 to 112"
    ],
    "correct": "D. 5, 80 to 112",
    "qNum": 73
  },
  {
    "q": "(Airspeed Limitations) The maximum permissible airspeed is _____ KIAS. The maximum airspeed with an extended load on the rescue hoist is _____ KIAS.",
    "options": [
      "A. 120, 55",
      "B. 120, 30",
      "C. 130, 55",
      "D. 130, 30"
    ],
    "correct": "D. 130, 30",
    "qNum": 74
  },
  {
    "q": "(Engine Oil Temperature and Pressure) At _____% engine torque or greater and with 100% Nr, minimum engine oil pressure is ____ PSI.",
    "options": [
      "A. 5, 40",
      "B. 5, 80",
      "C. 15, 40",
      "D. 15, 80"
    ],
    "correct": "D. 15, 80",
    "qNum": 75
  },
  {
    "q": "(Sideward and Rearward Airspeeds) Sideward airspeed is limited to a maximum of _____ knots, including wind factor. Sideward is the 90\u00b0quadrant on either side of the aircraft, from 45\u00b0 off the nose to 45\u00b0 off the tail.",
    "options": [
      "A. 30",
      "B. 35",
      "C. 80",
      "D. 120"
    ],
    "correct": "B. 35",
    "qNum": 76
  },
  {
    "q": "(Sideward and Rearward Airspeeds) Rearward airspeed is limited to a maximum of _____ knots including wind factor. Rearward is the 90\u00b0 quadrant 45\u00b0 on either side of the tail.",
    "options": [
      "A. 30",
      "B. 35",
      "C. 80",
      "D. 120"
    ],
    "correct": "A. 30",
    "qNum": 77
  },
  {
    "q": "(Cargo Door Airspeed Limits) The maximum airspeed with the cargo doors partially open (unsecured) or to open and close doors inflight is _____ KIAS.",
    "options": [
      "A. 55",
      "B. 80",
      "C. 120",
      "D. 130"
    ],
    "correct": "B. 80",
    "qNum": 78
  },
  {
    "q": "(Cargo Door Airspeed Limits) Maximum airspeed with cargo doors fully opened and secured is _____ KIAS.",
    "options": [
      "A. 55",
      "B. 80",
      "C. 120",
      "D. 130"
    ],
    "correct": "C. 120",
    "qNum": 79
  },
  {
    "q": "(Autorotations) Under all circumstances, autorotational landings should be attempted into the wind. The maximum steady state autorotation airspeed is _____ KIAS.",
    "options": [
      "A. 60",
      "B. 100",
      "C. 110",
      "D. 130"
    ],
    "correct": "C. 110",
    "qNum": 80
  },
  {
    "q": "(Center of Gravity Limitations) The lateral center of gravity limits are _____ inches left or right of the longitudinal axis.",
    "options": [
      "A. 6",
      "B. 2",
      "C. 1",
      "D. 0"
    ],
    "correct": "A. 6",
    "qNum": 81
  },
  {
    "q": "(Gross Weight Limits) The maximum takeoff gross weight of the helicopter is _____ pounds. The maximum ramp gross weight of the helicopter is _____ pounds. Aircraft are restricted from any ground handling, taxi, or takeoff operations above _____ pounds.",
    "options": [
      "A. 10500, 11000, 10500",
      "B. 10500, 10500, 10500",
      "C. 11000, 11000, 11000",
      "D. 11000, 15000, 11000"
    ],
    "correct": "A. 10500, 11000, 10500",
    "qNum": 82
  },
  {
    "q": "(Gross Weight Limits) National Emergency/Nuclear Weapons Security Contingency operations may require flight operations in excess of 10,500 pounds. In this event, gross weights up to 11,000 pounds are authorized, subject to the following warning(s):",
    "options": [
      "A. Single Engine Capability may be marginal or non-existent at higher density altitudes.",
      "B. Safe autorotation capability may not be available, especially at higher density altitudes.",
      "C. Aircraft performance and handling qualities may be significantly degraded.",
      "D. All of the above"
    ],
    "correct": "D. All of the above",
    "qNum": 83
  },
  {
    "q": "(Flight Restrictions) All operations above 10,500 pounds are increased risk missions and must be kept to an absolute minimum. No flight above 10,500 pounds should ever be construed as a routine or normal operation. The following restriction(s) apply to flights above 10,500 pounds:",
    "options": [
      "A. CG limits are 134-139.",
      "B. Rotor speed should be maintained at 100 percent.",
      "C. Takeoff, landing and In-Ground-Effect (IGE) maneuvering is limited to current flight manual parameters.",
      "D. All of the above"
    ],
    "correct": "D. All of the above",
    "qNum": 84
  },
  {
    "q": "(Wind Limitations) Starting and stopping rotors with surface winds above _____ knots is prohibited.",
    "options": [
      "A. 45",
      "B. 40",
      "C. 20",
      "D. 15"
    ],
    "correct": "A. 45",
    "qNum": 85
  },
  {
    "q": "(Extreme Temperature Operation) Operation in ambient temperatures above _____\u00b0 C and below _____\u00b0 C is prohibited.",
    "options": [
      "A. 52, 54",
      "B. 54, 52",
      "C. 52, -54",
      "D. 54, -52"
    ],
    "correct": "C. 52, -54",
    "qNum": 86
  },
  {
    "q": "(Maximum Altitude Operation) The maximum operational altitude is 15,000 feet pressure and/or density altitudes. For gross weights above 10,000 pounds, the maximum operational altitude is _____ feet pressure and/ or density altitude.",
    "options": [
      "A. 6600",
      "B. 8000",
      "C. 10000",
      "D. 15000"
    ],
    "correct": "C. 10000",
    "qNum": 87
  },
  {
    "q": "(Vortex Ring State) Increasing collective has no effect on recovery and will aggravate vortex ring state. During approaches at less than _____ knots, do not exceed _____ feet per minute descent rate.",
    "options": [
      "A. 55, 800",
      "B. 40, 800",
      "C. 800, 40",
      "D. 800, 55"
    ],
    "correct": "B. 40, 800",
    "qNum": 88
  },
  {
    "q": "(Settling With Power) Avoid rates of descent in excess of _____ feet per minute with airspeed below _____ knots.",
    "options": [
      "A. 55, 800",
      "B. 40, 800",
      "C. 800, 40",
      "D. 800, 55"
    ],
    "correct": "C. 800, 40",
    "qNum": 89
  },
  {
    "q": "(Settling With Power) When landing ______, the aircraft skids are designed to absorb a majority of the impact. Landing _____ will increase aircrew survivability and decrease overall damage to the aircraft.",
    "options": [
      "A. nose low",
      "B. level",
      "C. nose high",
      "D. straight ahead"
    ],
    "correct": "B. level",
    "qNum": 90
  },
  {
    "q": "(Instrument Climb) Climbs with vertical velocities over _____ fpm are not recommended.",
    "options": [
      "A. 100",
      "B. 500",
      "C. 1000",
      "D. 1500"
    ],
    "correct": "D. 1500",
    "qNum": 91
  },
  {
    "q": "(Instrument Descent) Rates of descent over _____ fpm are not recommended.",
    "options": [
      "A. 100",
      "B. 500",
      "C. 1000",
      "D. 1500"
    ],
    "correct": "C. 1000",
    "qNum": 92
  },
  {
    "q": "(Rain) If the windshield wipers do not start in LOW or MED position, turn the control switch to _____. After the wiper starts, return the control switch to the desired position.",
    "options": [
      "A. PARK",
      "B. OFF",
      "C. MED",
      "D. HIGH"
    ],
    "correct": "D. HIGH",
    "qNum": 93
  },
  {
    "q": "(Flight in Icing Conditions) Intentional flight through known icing conditions with OAT colder than _____\u00b0 C is prohibited.",
    "options": [
      "A. - 10",
      "B. - 5",
      "C. 5",
      "D. 10"
    ],
    "correct": "B. - 5",
    "qNum": 94
  },
  {
    "q": "(Flight in Icing Conditions) The particle separator should be in AUTO when visible moisture is evident at temperatures below _____\u00b0 C.",
    "options": [
      "A. 5",
      "B. 10",
      "C. -5",
      "D. -10"
    ],
    "correct": "A. 5",
    "qNum": 95
  },
  {
    "q": "(Flight in Icing Conditions) Before entering possible icing conditions, (visible moisture with temperature below _____\u00b0 C), the pilot should actuate the pitot heat.",
    "options": [
      "A. 5",
      "B. 10",
      "C. -5",
      "D. -10"
    ],
    "correct": "B. 10",
    "qNum": 96
  },
  {
    "q": "(Turbulence and Thunderstorm) Aircraft are restricted from flight in areas where turbulence is known to exceed _____.",
    "options": [
      "A. light",
      "B. moderate",
      "C. severe",
      "D. extreme"
    ],
    "correct": "B. moderate",
    "qNum": 97
  },
  {
    "q": "(Wind Direction and Velocity) Depending on wind velocity, the apparent airspeed/ground speed relationship changes when turning downwind. After the turn, less airspeed is required to maintain ground speed. Reducing airspeed may result in loss of ETL which increases the power required to maintain altitude. When operating close to the surface, especially during downwind maneuvers, _____ and _____ required must be monitored closely.",
    "options": [
      "A. descent rate, torque",
      "B. airspeed, power",
      "C. Nfs, Nr",
      "D. CGB oil pressure, transmission oil pressure"
    ],
    "correct": "B. airspeed, power",
    "qNum": 98
  },
  {
    "q": "(Cold Weather Operations) When the outside air temperature is below minus _____\u00b0 C, do not advance throttles beyond _____% Ng until engine, combining gearbox, and transmission oil pressures are stabilized within desired operating range.",
    "options": [
      "A. 18, 61",
      "B. 18, 71",
      "C. 10, 61",
      "D. 10, 71"
    ],
    "correct": "B. 18, 71",
    "qNum": 99
  },
  {
    "q": "(Performance Data) All charts are presented for _____% Nf and Nr. It is strongly recommended that _____% RPM be used at 40 knots and below.",
    "options": [
      "A. 100",
      "B. 97",
      "C. 91",
      "D. 78"
    ],
    "correct": "A. 100",
    "qNum": 100
  },
  {
    "q": "(Density Altitude) Humidity affects density altitude. The higher the humidity, the higher the density altitude. This in fact could have an effect on power required. Throughout this manual add _____ feet density altitude for each _____ percent increase in humidity above 40 percent.",
    "options": [
      "A. 100, 10",
      "B. 220, 10",
      "C. 100, 5",
      "D. 220, 5"
    ],
    "correct": "A. 100, 10",
    "qNum": 101
  },
  {
    "q": "(Fuel Flow) Increase fuel flow _____% for heater on.",
    "options": [
      "A. 2",
      "B. 4",
      "C. 10",
      "D. None of the above."
    ],
    "correct": "A. 2",
    "qNum": 102
  },
  {
    "q": "(Tail Rotor Effectiveness) To ensure adequate tail rotor and cyclic control margins, avoid winds in excess of _____ knots from approximately the __________ o'clock position. Avoiding winds from these critical azimuths can help preclude loss of tail rotor effectiveness.",
    "options": [
      "A. 10, 2 to 4",
      "B. 10, 8 to 10",
      "C. 20, 2 to 4",
      "D. 20, 8 to 10"
    ],
    "correct": "C. 20, 2 to 4",
    "qNum": 103
  },
  {
    "q": "(Sideward and Rearward Airspeed) With gross weights above 9,600 pounds and density altitudes above 10,000 feet, _______.",
    "options": [
      "A. Sideward and rearward flight is not recommended.",
      "B. Sufficient control authority may not be available to attain sideward and rearward flight velocities in excess of 15 knots",
      "C. Sideward and rearward flight may cause a vertical oscillation at approximately 3 cycles per second",
      "D. Adequate control margin exists at 25 knots sideward and 20 knots rearward."
    ],
    "correct": "B. Sufficient control authority may not be available to attain sideward and rearward flight velocities in excess of 15 knots",
    "qNum": 104
  }
];


let current = 0;
let selectedAnswers = [];
let incorrectAnswers = [];
let testComplete = false;
let selectedOption = null;

function startQuiz(fromReview = false) {
  const shuffle = document.getElementById('shuffle').checked;
  const feedback = document.getElementById('feedback').checked;
  const count = parseInt(document.getElementById('questionCount').value) || 10;

  selectedAnswers = [];
  incorrectAnswers = [];
  current = 0;
  testComplete = false;
  selectedOption = null;
  window.feedback = feedback;

  let q = fromReview ? [...window.lastIncorrectQuestions] : [...questions];
  if (shuffle && !fromReview) q.sort(() => Math.random() - 0.5);

  window.activeQuestions = q.slice(0, fromReview ? q.length : count);
  renderQuiz();
}

function renderQuiz() {
  const container = document.getElementById('quizContainer');
  container.innerHTML = "";

  if (testComplete) {
    const reviewTitle = document.createElement("h2");
    reviewTitle.innerText = "Quiz Complete – Review Answers";
    container.appendChild(reviewTitle);

    selectedAnswers.forEach((ans, i) => {
      const div = document.createElement("div");
      div.className = "question-card review";
      div.innerHTML = `<strong>Q${ans.qNum} (Quiz #${i + 1}):</strong> ${ans.q}<br>
        <span style="color:${ans.isCorrect ? 'green' : 'red'}">Your answer: ${ans.selected}</span><br>
        <span style="color:green">Correct answer: ${ans.correct}</span>`;
      container.appendChild(div);
    });

    if (incorrectAnswers.length > 0) {
      const reviewBtn = document.createElement("button");
      reviewBtn.innerText = "Review Missed Questions Only";
      reviewBtn.className = "review-btn";
      reviewBtn.onclick = () => {
        window.lastIncorrectQuestions = incorrectAnswers.map(q => ({
          qNum: q.qNum,
          q: q.q,
          options: questions.find(orig => orig.qNum === q.qNum).options,
          correct: q.correct
        }));
        startQuiz(true);
      };
      container.appendChild(reviewBtn);
    }

    const restart = document.createElement("button");
    restart.innerText = "Start New Quiz";
    restart.onclick = () => startQuiz(false);
    container.appendChild(restart);
    return;
  }

  const item = window.activeQuestions[current];
  if (!item) return;

  selectedOption = selectedAnswers[current]?.selected || null;

  const card = document.createElement("div");
  card.className = "question-card";

  const qEl = document.createElement("p");
  qEl.innerHTML = `<span style="font-size: 0.7rem;">Source Q${item.qNum}</span><br/><span style="font-size: 0.75em;"><em>(Question ${current + 1} of ${window.activeQuestions.length})</em></span><br/>${item.q}` + (item.ref ? `<br><small><em>Ref: ${item.ref}</em></small>` : "");
  card.appendChild(qEl);

  item.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-button";
    btn.innerText = opt;

    if (selectedOption) {
      btn.disabled = true;
      if (opt === selectedOption) {
        btn.classList.add("selected");
        if (window.feedback) {
          btn.classList.add(opt === item.correct ? "correct" : "incorrect");
        }
      }
      if (opt === item.correct && window.feedback) {
        btn.classList.add("correct");
      }
    }

    btn.onclick = () => handleAnswer(opt);
    card.appendChild(btn);
  });

  const nav = document.createElement("div");
  nav.className = "nav-buttons";

  const backBtn = document.createElement("button");
  backBtn.innerText = "⬅ Back";
  backBtn.disabled = current === 0;
  backBtn.onclick = () => {
    current--;
    renderQuiz();
  };

  const nextBtn = document.createElement("button");
  nextBtn.innerText = current + 1 === window.activeQuestions.length ? "Finish" : "Next ➡";
  nextBtn.disabled = !selectedAnswers[current];
  nextBtn.onclick = () => {
    if (current + 1 === window.activeQuestions.length) {
      testComplete = true;
    } else {
      current++;
    }
    renderQuiz();
  };

  nav.appendChild(backBtn);
  nav.appendChild(nextBtn);
  const endBtn = document.createElement("button");
  endBtn.innerText = "End Quiz";
  endBtn.onclick = () => { testComplete = true; renderQuiz(); };
  nav.appendChild(endBtn);
  card.appendChild(nav);

  container.appendChild(card);
}

function handleAnswer(opt) {
  const item = window.activeQuestions[current];
  const isCorrect = opt === item.correct;

  const response = { qNum: item.qNum, q: item.q, selected: opt, correct: item.correct, isCorrect };
  selectedAnswers[current] = response;

  if (!isCorrect) {
    if (!incorrectAnswers.find(q => q.qNum === item.qNum)) {
      incorrectAnswers.push(response);
    }
  }

  selectedOption = opt;
  renderQuiz();
}

function resetQuiz() {
  selectedAnswers = [];
  incorrectAnswers = [];
  current = 0;
  testComplete = false;
  selectedOption = null;
  document.getElementById("quizContainer").innerHTML = "<p>Reset. Click Start to begin again.</p>";
}



function toggleDarkMode() {
  document.body.classList.toggle('dark');
}
