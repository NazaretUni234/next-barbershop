import { AnimatePresence, motion } from "framer-motion";

export default function AnimationTabs({ selectInfo }: { selectInfo: string }) {
  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <AnimatePresence mode="wait">
        {selectInfo === "tab_a" && (
          <motion.div
            key="tab_a"
            className="tab-pane"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <p>
              En Mr. Pastore BarberShop, nuestra misión es ofrecer una
              experiencia de barbería excepcional, combinando tradición y
              modernidad para realzar el estilo y la confianza de cada cliente.
              Nos dedicamos a brindar cortes de cabello, afeitados y arreglos de
              barba con precisión, profesionalismo y pasión por el detalle, en
              un ambiente acogedor y auténtico.
            </p>
            <p>
              Buscamos no solo transformar la apariencia, sino también
              proporcionar un espacio donde cada visita se convierta en un
              ritual de cuidado personal, estilo y relajación. Nuestro
              compromiso es la excelencia en cada servicio, asegurándonos de que
              cada cliente salga con una imagen impecable y una actitud
              renovada.
            </p>
          </motion.div>
        )}
        {selectInfo === "tab_b" && (
          <motion.div
            key="tab_b"
            className="tab-pane"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <p>
              En Mr. Pastore BarberShop, combinamos la tradición de la barbería
              clásica con las tendencias más actuales para ofrecerte un servicio
              de primera calidad. Nuestro equipo de barberos expertos garantiza
              cortes precisos, afeitados impecables y un trato personalizado en
              un ambiente exclusivo y acogedor. Utilizamos solo productos de
              alta calidad para el mejor cuidado de tu cabello y barba,
              asegurándonos de que cada visita sea una experiencia única. Porque
              no es solo un corte, es un estilo de vida.
            </p>
            <ul className="ulRow">
              <li>
                <i className="fa fa-circle-o" aria-hidden="true" />
                Experiencia y profecionalismo
              </li>
              <li>
                <i className="fa fa-circle-o" aria-hidden="true" />
                Tradición con un Toque Moderno
              </li>
              <li>
                <i className="fa fa-circle-o" aria-hidden="true" />
                Ambiente Exclusivo y Acogedor
              </li>
              <li>
                <i className="fa fa-circle-o" aria-hidden="true" />
                Productos de Alta Calidad
              </li>
              <li>
                <i className="fa fa-circle-o" aria-hidden="true" />
                Atención Personalizada
              </li>
            </ul>
          </motion.div>
        )}
        {selectInfo === "tab_c" && (
          <motion.div
            key="tab_c"
            className="tab-pane"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <p>
              Nuestro equipo de barberos profesionales está dedicado a
              perfeccionar cada detalle, desde los cortes más clásicos hasta los
              estilos más vanguardistas. Nos enorgullece crear un espacio donde
              cada cliente se sienta bienvenido, relajado y seguro de que saldrá
              con un look impecable.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
