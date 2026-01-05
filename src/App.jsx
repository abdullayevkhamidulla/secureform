import styles from "./App.module.css";
import { useState, useRef, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import { regionsData, specialities } from "./constant/data.js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

const Register = ({ setShowModal, course = "" }) => {
  // const navigate = useNavigate();

  const [phone, setPhone] = useState("998");
  const [isAgree, setIsAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState(""); // honeypot

  const fullnameRef = useRef(null);
  const addressRef = useRef(null);
  const courseRef = useRef(null);

  useEffect(() => {
    if (courseRef.current) {
      courseRef.current.value = course;
    }
  }, [course]);

  const clearInputs = () => {
    setPhone("998");
    fullnameRef.current.value = "";
    addressRef.current.value = "";
    courseRef.current.value = course || "";
    setIsAgree(false);
    setCompany("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      fullname: fullnameRef.current.value.trim(),
      phone: `+${phone}`,
      address: addressRef.current.value,
      course: courseRef.current.value,
      company, // honeypot
    };

    // 🔐 Frontend validation
    if (!user.fullname || user.fullname.length < 6) {
      toast.error("To‘liq ismingizni kiriting (kamida 6 ta belgi)");
      return;
    }

    if (!/^\+\d{9,15}$/.test(user.phone)) {
      toast.error("Telefon raqami noto‘g‘ri");
      return;
    }

    if (!user.address) {
      toast.error("Manzilni tanlang");
      return;
    }

    if (!user.course) {
      toast.error("Kursni tanlang");
      return;
    }

    if (!isAgree) {
      toast.error("Rozilikni belgilang");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error();
      }

      toast.success("Ro'yxatdan o'tish muvaffaqiyatli!");
      // navigate("/registration-complete");
      clearInputs();
      setShowModal(false);

    } catch {
      toast.error("Xatolik yuz berdi, qayta urinib ko‘ring");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Zamonaviy kasblargacha <br /> 1 qadam qoldi
      </h1>

      <p className={styles.subtitle}>
        Batafsil ma'lumot olish uchun ro'yxatdan o'ting
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Honeypot (botlar uchun) */}
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{ display: "none" }}
        />

        <div className={styles.formGroup}>
          <label>Ism Familiyangiz</label>
          <input
            ref={fullnameRef}
            type="text"
            placeholder="Azimjon Jalilov"
          />
        </div>

        <div className={styles.phoneNumber}>
          <PhoneInput
            country="uz"
            onlyCountries={["uz"]}
            disableDropdown
            value={phone}
            onChange={(value) => {
              if (!value.startsWith("998")) {
                value = "998" + value.replace(/\D/g, "");
              }
              setPhone(value);
            }}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Yashash manzilingiz</label>
          <select ref={addressRef} className={styles.selectBox}>
            <option value="">Tanlang</option>
            {regionsData.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Qaysi kursda o‘qimoqchisiz?</label>
          <select ref={courseRef} className={styles.selectBox}>
            <option value="">Tanlang</option>
            {specialities.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <label
          className={styles.offerta}
          onClick={() => setIsAgree(!isAgree)}
        >
          <span className={styles.square}>
            {isAgree && <FaCheck />}
          </span>
          <span>Shaxsiy ma'lumotlarni qayta ishlanishiga roziman</span>
        </label>

        <button className={styles.btn} disabled={loading}>
          {loading ? "Yuborilmoqda..." : "Ro'yxatdan o'tish"}
        </button>
      </form>
    </div>
  );
};

export default Register;
