import java.util.ArrayList;
import java.util.List;

public class CourseManagement {
    private static List<Course> courses = new ArrayList<>();
    private static List<Student> students = new ArrayList<>();

    // Static methods for course and student management

    public static void addCourse(String courseCode, String courseName, int maxCapacity) {
        Course newCourse = new Course(courseCode, courseName, maxCapacity);
        courses.add(newCourse);
    }

    public static void enrollStudent(Student student, Course course) {
        if (course.getTotalEnrolledStudents() < course.getMaxCapacity()) {
            student.enrollInCourse(course);
            course.incrementEnrolledStudents();
        } else {
            System.out.println("Course has reached its maximum capacity. Enrollment failed.");
        }
    }

    public static void assignGrade(Student student, Course course, int grade) {
        student.assignGrade(course, grade);
    }

    public static void calculateOverallGrade(Student student) {
        // Calculate overall course grade for the student based on individual grades
        // You can implement your specific calculation logic here
    }
}
