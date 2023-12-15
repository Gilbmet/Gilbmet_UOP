public class Course {
    private String courseCode;
    private String courseName;
    private int maxCapacity;
    private static int totalEnrolledStudents = 0;

    public Course(String courseCode, String courseName, int maxCapacity) {
        this.courseCode = courseCode;
        this.courseName = courseName;
        this.maxCapacity = maxCapacity;
    }

    // Getter methods for course information

    public static int getTotalEnrolledStudents() {
        return totalEnrolledStudents;
    }

    public static void incrementEnrolledStudents() {
        totalEnrolledStudents++;
    }
}
