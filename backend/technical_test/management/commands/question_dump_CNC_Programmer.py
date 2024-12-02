from django.core.management.base import BaseCommand
from technical_test.models import Question  # Replace 'myapp' with your app name


class Command(BaseCommand):
    help = 'Populate the Question table with predefined questions'

    def map_yoe_to_int(self, experience_range):
        if experience_range == '0-1 years':
            return 0
        elif experience_range == '1-2 years':
            return 1
        elif experience_range == '2-4 years':
            return 2
        elif experience_range == '4-7 years':
            return 4
        elif experience_range == '7+ years':
            return 7
        return 0  # Default to 0 if no match is found

    def handle(self, *args, **kwargs):
# CNC Programmer questions with experience levels
        cnc_questions = [
        ("What does G00 command do in CNC programming?", "Rapid positioning", "Circular interpolation", "Coolant on", "Tool change", "A", "CNC basics", "0-1 years"),
        ("What is the purpose of the M06 command?", "End program", "Tool change", "Start spindle", "Set feed rate", "B", "Tool handling", "0-1 years"),
        ("Which axis is represented by the Z-coordinate?", "Horizontal movement", "Vertical movement", "Depth movement", "Rotational movement", "B", "Coordinate systems", "1-2 years"),
        ("What is backlash in CNC machines?", "Tool vibration", "Inaccuracy in movement", "Material deformation", "Coolant overflow", "B", "Machine accuracy", "2-4 years"),
        ("What material is commonly used for cutting tools?", "Plastic", "Carbide", "Copper", "Wood", "B", "Tool materials", "1-2 years"),
        ("What does the term 'spindle speed' mean?", "Speed of tool movement", "Rotation speed of spindle", "Depth of cut", "Feed rate", "B", "Machining parameters", "0-1 years"),
        ("What is the function of a coolant system in CNC machines?", "Reduce heat", "Increase speed", "Measure torque", "Align tools", "A", "Coolant systems", "2-4 years"),
        ("What does the term 'home position' refer to?", "Default tool position", "Tool origin", "Operator console", "Emergency stop", "A", "Machine setup", "0-1 years"),
        ("Which programming language is widely used in CNC?", "Java", "Python", "G-code", "C++", "C", "CNC programming", "1-2 years"),
        ("What is the G02 command used for?", "Circular interpolation CW", "Circular interpolation CCW", "Linear interpolation", "End program", "A", "Circular movements", "2-4 years"),
        ("What is the difference between climb and conventional milling?", "Tool rotation direction", "Feed direction", "Tool wear rate", "All of the above", "D", "Milling techniques", "4-7 years"),
        ("What is the purpose of tool offset in CNC machines?", "Adjust tool position", "Compensate for tool wear", "Ensure accurate machining", "All of the above", "D", "Tool setup", "2-4 years"),
        ("Which material is most challenging to machine?", "Aluminum", "Titanium", "Copper", "Plastic", "B", "Material properties", "4-7 years"),
        ("What does the G90 command indicate?", "Absolute programming", "Incremental programming", "Tool change", "Coolant off", "A", "Programming modes", "1-2 years"),
        ("What is the function of a post-processor in CNC?", "Convert CAM output to G-code", "Optimize machining speed", "Control machine temperature", "None of the above", "A", "CAM integration", "2-4 years"),
        ("What is tool wear compensation?", "Adjusting tool path for wear", "Replacing worn tools", "Reducing tool speed", "Cooling the tool", "A", "Tool maintenance", "4-7 years"),
        ("Which cutting fluid is most commonly used in CNC?", "Water", "Oil", "Coolant mix", "Alcohol", "C", "Coolant selection", "1-2 years"),
        ("What does an end mill cutter do?", "Drills holes", "Cuts flat surfaces", "Engraves patterns", "Cuts threads", "B", "Cutting tools", "2-4 years"),
        ("What is dwell time in CNC machining?", "Time tool remains stationary", "Time for tool change", "Delay between operations", "Spindle acceleration time", "A", "Machining delays", "0-1 years"),
        ("What does the term 'feed rate' refer to?", "Speed of tool rotation", "Movement of tool in material", "Rate of coolant flow", "Spindle speed", "B", "Machining parameters", "1-2 years"),
        ("Which command is used to stop a program temporarily?", "M01", "M02", "M03", "M06", "A", "Program control", "0-1 years"),
        ("What is a tool path?", "Path taken by cutting tool", "Programming flow", "Coolant channel", "Spindle trajectory", "A", "Programming fundamentals", "1-2 years"),
        ("What is a fixture in CNC machining?", "Tool holder", "Workpiece holder", "Coolant nozzle", "Control system", "B", "Work holding", "2-4 years"),
        ("What does the term 'cycle time' mean?", "Time to complete one operation", "Time to change tools", "Time for coolant flow", "Spindle rotation time", "A", "Operation efficiency", "4-7 years"),
        ("What is the function of a CAD system in CNC?", "Design parts", "Operate CNC machine", "Control tool movement", "None of the above", "A", "CAD basics", "2-4 years"),
        ("What is interpolation in CNC programming?", "Tool movement between points", "Tool rotation", "Spindle speed adjustment", "Coolant control", "A", "Tool movement", "2-4 years"),
        ("Which type of coordinate system is commonly used in CNC?", "Polar", "Rectangular", "Cylindrical", "Spherical", "B", "Coordinate systems", "1-2 years"),
        ("What is tool chatter?", "Unwanted vibration", "Coolant flow noise", "Spindle rotation error", "Tool misalignment", "A", "Machining issues", "4-7 years"),
        ("What is the function of a tool turret?", "Holds multiple tools", "Controls spindle speed", "Aligns the workpiece", "Measures tool wear", "A", "Tool storage", "2-4 years"),
        ("What does a CNC controller do?", "Executes G-code", "Designs parts", "Measures dimensions", "Applies coolant", "A", "Machine control", "1-2 years"),
        ("What is the purpose of a safety interlock on CNC machines?", "Prevent accidents", "Increase speed", "Improve machining accuracy", "Reduce tool wear", "A", "Safety systems", "4-7 years"),
        ("What is a common reason for tool breakage?", "Excessive feed rate", "Low spindle speed", "Improper coolant", "Incorrect tool alignment", "A", "Tool maintenance", "2-4 years"),
        ("What does M30 command signify?", "Program end and reset", "Tool change", "Coolant off", "Spindle stop", "A", "Program control", "0-1 years"),
        ("What is surface finish in CNC machining?", "Smoothness of the machined surface", "Tool alignment accuracy", "Coolant residue", "Machining depth", "A", "Quality control", "2-4 years"),
        ("What does the term 'part program' refer to?", "Set of instructions for machining", "Tool maintenance log", "Coolant mixing guide", "Machine operation manual", "A", "Programming basics", "0-1 years"),
        ("What is the role of a CNC operator?", "Write programs", "Operate and monitor machines", "Repair tools", "Design parts", "B", "Operator role", "1-2 years"),
        ("What is threading in CNC machining?", "Cutting helical grooves", "Drilling a hole", "Creating flat surfaces", "Cutting sharp edges", "A", "Advanced machining", "4-7 years"),
        ("What does the term 'tool life' refer to?", "Time tool remains usable", "Tool storage duration", "Tool replacement cycle", "None of the above", "A", "Tool longevity", "4-7 years"),
        ("What is a G54 command used for?", "Set work coordinate system", "Stop program", "Coolant on", "Tool change", "A", "Coordinate systems", "2-4 years"),
        ("What is the main advantage of CNC machining?", "High precision", "Low cost", "Simple setup", "Manual control", "A", "CNC advantages", "1-2 years"),
        ("What is peck drilling?", "Drilling with intermittent retraction", "High-speed drilling", "Low-pressure drilling", "Drilling without coolant", "A", "Drilling techniques", "4-7 years"),
        ]

        # Populate the database
        for question in cnc_questions:
            yoe_int = self.map_yoe_to_int(question[7])  # Convert the experience string to an integer
            Question.objects.create(
                skill="CNC Programmer",
                yoe=yoe_int,
                question_text=question[0],
                option_a=question[1],
                option_b=question[2],
                option_c=question[3],
                option_d=question[4],
                correct_option=question[5],
                concept_tag=question[6],
            )
        self.stdout.write(self.style.SUCCESS('Successfully populated the Question table!'))


