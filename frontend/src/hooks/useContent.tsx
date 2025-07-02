import axios from "axios";
import { BACKEND_URL } from "../config";
import { useEffect, useState } from "react";

export interface Content {
  type: "twitter" | "youtube";
  link: string;
  title: string;
}

export function useContent(): { contents: Content[]; refresh: () => void } {
    function refresh() {
        axios.get(BACKEND_URL + "/api/v1/content", {
          headers: {
            "Authorization": localStorage.getItem("token") || ""
          }
        }).then((response) => {
          setContents(response.data.content);
        });
      }
  const [contents, setContents] = useState<Content[]>([]);
  useEffect(() => {
    refresh();
    const interval = setInterval(refresh, 10 * 1000);
    return () => clearInterval(interval);
  }, []);
  return {contents,refresh};
}