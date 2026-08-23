export default function HomePage() {
  const siteName = "Student Grade";
  const description = "ศูนย์ข้อมูลการลงทะเบียนเรียน";

  return (
    <main>
      <h1>{siteName}</h1>
      
      <p>{description}</p>

      <section>
        <p>
          เว็บไซต์นี้เหมาะสำหรับนักศึกษามหาวิทยาลัยแม่โจ้ที่ต้องการเช็คข้อมูลรายวิชาและลงทะเบียนเรียน
        </p>
      </section>
    </main>
  );
}