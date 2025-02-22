import { redirect } from "next/navigation";
import HostPageImpl from "./page.client";
import { CreateStreamResponse } from "@/lib/controller";

interface PageProps {
  searchParams: {
    at: string | undefined;
    rt: string | undefined;
  };
}

type User = {
  id: number;
  name: string;
};

export default async function HostPage({
  searchParams: { at, rt },
}: PageProps) {
  if (!at || !rt) {
    // redirect("/");
  }

  const serverUrl = process.env
    .LIVEKIT_WS_URL!.replace("wss://", "https://")
    .replace("ws://", "http://");

  return <HostPageImpl authToken={at!} roomToken={rt!} serverUrl={serverUrl} />;
}
