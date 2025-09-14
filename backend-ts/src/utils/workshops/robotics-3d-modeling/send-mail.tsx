import { renderToStaticMarkup } from "react-dom/server";
import { Tables } from "../../../types/supabase";
import mailService from "../../../lib/mail";

interface Robotics3DModelingMailBodyProps {
  fullName: string;
}

function Robotics3DModelingMailBody(props: Robotics3DModelingMailBodyProps) {
  return (
    <div>
      <p>
        Poštovani/a <strong>{props.fullName}</strong>,
      </p>
      <p>
        s veseljem Vas obavještavamo da je <strong>{props.fullName}</strong>{" "}
        primljen/a na radionicu robotike i 3d modeliranja udruge Šou program.
      </p>
      <p>
        U privitku maila Vam šaljemo program koji objašnjava koji je cilj svake
        radionice koje će biti održane. Tijekom radionice polaznici će kreirati
        autić na daljinsko upravljanje, a za sam kraj radionice bit će
        organizirano druženje na kojem će moći testirati i igrati se autićem
        koji su sami izradili. U slučaju da iz nekog razloga autići na daljinsko
        upravljanje ne budu gotovi unutar devet termina, predviđen je i 10.
        termin nadoknade. Prva radionica bit će održana{" "}
        <strong>
          19. listopada 2024. godine od 10:00 do 11:30 sati, na lokaciji Petra
          Preradovića 1 (zgrada FET-a, dvorana 402).
        </strong>
      </p>
      <p>
        Uz to, u privitku maila šaljemo dokumentaciju (
        <strong>Suglasnost o sudjelovanju i fotografiranju</strong>) koja je
        potrebna kako bi Vaše dijete moglo sudjelovati na radionici. Molimo Vas
        da ispunjenu i potpisanu suglasnost povratno pošaljete na ovu e-mail
        adresu najkasnije do <strong>12. listopada 2024. 00:00.</strong>
      </p>
      <p>
        U slučaju spriječenosti djeteta da sudjeluje u radionici, molimo Vas da
        nas na vrijeme obavijestite putem e-mail pošte. Na taj način, pružit
        ćemo priliku drugom polazniku da sudjeluje u radionici te izradi
        vlastiti autić.
      </p>
      <p>Ukoliko imate dodatnih pitanja slobodno nas kontaktirajte!</p>
      <p>Srdačan pozdrav!</p>
    </div>
  );
}

type WorkshopRegistrationWithWorkshop = Tables<"workshop_registrations"> & {
  workshop: Tables<"workshops">;
};

export default async function sendRobotics3DModelingMail(
  workshopRegistration: WorkshopRegistrationWithWorkshop,
  email_to: string
) {
  const { fullName } = workshopRegistration.form_data as {
    fullName: string;
  };

  const fullNameUnderscored = fullName.replace(/\s+/g, "_");

  await mailService.sendMail({
    from: process.env.EMAIL_USER,
    to: email_to,
    subject: "POTVRDA PRIJAVE ZA RADIONICU ROBOTIKE",
    html: renderToStaticMarkup(
      <Robotics3DModelingMailBody fullName={fullName} />
    ),
    attachments: [
      {
        filename: `Suglasnost_o_sudjelovanju_i_fotografiranju_${fullNameUnderscored}.pdf`,
        path: "./attachments/Suglasnost_o_sudjelovanju_i_fotografiranju.pdf",
      },
      {
        filename: `Radionica_robotike_za_djecu_-_Sou_program_2024.pdf`,
        path: "./attachments/Radionica_robotike_za_djecu_-_Sou_program_2024.pdf",
      },
    ],
  });
}
