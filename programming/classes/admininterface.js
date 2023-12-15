import java.util.Scanner;

public class AdministratorInterface {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            // Display menu options
            System.out.println("1. Add a new course");
            System.out.println("2. Enroll a student");
            System.out.println("3. Assign a grade");
            System.out.println("4. Calculate overall course grades");
            System.out.println("0. Exit");

            // Prompt for user input
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();

            // Perform the selected operation
            switch (choice) {
                case 1:
                    addNewCourse();
                    break;
                case 2:
                    enrollStudent();
                    break;
                case 3:
                    assignGrade();
                    break;
                case 4:
                    calculateOverallGrades();
                    break;
                case 0:
                    System.out.println("Exiting the program. Goodbye!");
                    System.exit(0);
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    // Implement methods to interact with CourseManagement class based on user input
}
