public class Student {
    private String name;
    private int id;
    private List<Course> enrolledCourses;
    private Map<Course, Integer> courseGrades;

    public Student(String name, int id) {
        this.name = name;
        this.id = id;
        this.enrolledCourses = new ArrayList<>();
        this.courseGrades = new HashMap<>();
    }

    // Getter and setter methods for name and id

    public List<Course> getEnrolledCourses() {
        return enrolledCourses;
    }

    public Map<Course, Integer> getCourseGrades() {
        return courseGrades;
    }

    public void enrollInCourse(Course course) {
        enrolledCourses.add(course);
    }

    public void assignGrade(Course course, int grade) {
        if (enrolledCourses.contains(course)) {
            courseGrades.put(course, grade);
        } else {
            System.out.println("Student not enrolled in the specified course.");
        }
    }
}
