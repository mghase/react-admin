import Empty from "../components/Empty";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Page from "../components/Page";
import PageBody from "../components/PageBody";
import PageHeader from "../components/PageHeader";
import Typography from "../components/Typography";
import { useMembers } from "../hooks/useMembers";
import { Member } from "../types/member";

type MemberListProps = {
  members?: Member[];
};

function MemberList({ members }: MemberListProps) {
  if (!members || !members.length) {
    return <Empty message="You don't have any member yet." />;
  }

  return (
    <List>
      {members.map((member) => (
        <ListItem key={member.id} title={member.email} />
      ))}
    </List>
  );
}

export default function Members() {
  const { data } = useMembers();

  return (
    <Page>
      <PageHeader>
        <Typography variant="h1">Members</Typography>
      </PageHeader>
      <PageBody>
        <MemberList members={data} />
      </PageBody>
    </Page>
  );
}
