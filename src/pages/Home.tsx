import { useQuery } from "@tanstack/react-query";
import Header from "../components/Header";
import { fetchTags } from "../api/homePageLoader";
import { Card, Chip, Link, List, ListItem } from "@mui/joy";
import { FetchedTagData } from "../model/FetchedTagData";

const HomePage = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });

  return (
    <>
      <Header />
      <main>
        {isPending && <p>Loading...</p>}
        {isError && <p className="text-red-500">{error.message}</p>}
        {!isPending && !isError && (
          <List>
            {data.map((tag: FetchedTagData) => (
              <ListItem key={tag.name}>
                <Card>
                  <Link underline="none">
                    <Chip>{tag.name}</Chip>
                  </Link>
                  <p>{tag.count} questions</p>
                </Card>
              </ListItem>
            ))}
          </List>
        )}
      </main>
    </>
  );
};

export default HomePage;
