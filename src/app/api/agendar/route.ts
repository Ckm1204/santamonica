import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxPGwLAZUUa8xDXt8RC9aQ-vXlCXftJ2vBRAhow6xD-yrgMpq1TjHpsOkydfJXbIqsY6g/exec";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre_completo, telefono, edad } = body;

    if (!nombre_completo || !telefono) {
      return NextResponse.json(
        { status: "error", message: "Nombre y teléfono son requeridos." },
        { status: 400 }
      );
    }

    const payload = {
      codigo: "SM-" + Math.floor(100000 + Math.random() * 900000),
      fecha_registro: new Date().toLocaleString("es-CO", {
        timeZone: "America/Bogota",
      }),
      nombre_completo: String(nombre_completo).trim(),
      telefono: String(telefono).trim(),
      edad: edad ? String(edad).trim() : "",
      tipo_documento: "CC",
      numero_documento: "",
      metodo_solicitado: "Sinoimplant 150mg",
      jornada: "Mañana",
      fecha_sugerida: "",
      sede: "Hospital Santa Mónica",
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({ status: "success" }));

    return NextResponse.json({
      status: "success",
      message: "Registro guardado correctamente",
      data,
    });
  } catch (error) {
    console.error("Error al registrar en Google Sheets:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Ocurrió un error al procesar el registro.",
      },
      { status: 500 }
    );
  }
}
