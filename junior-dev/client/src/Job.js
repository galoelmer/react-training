import React, { useState } from 'react';
import {
  Card,
  Image,
  Modal,
  Segment
} from 'semantic-ui-react';
import moment from 'moment';

export default function Job({ job }) {
  const [modalOpen, setModalOpen] = useState(false);
  const postDate = new Date(job.created_at).toISOString();
  // Open - Close modal handle
  const handleClose = () => setModalOpen(false);
  const handleOpen = () => setModalOpen(true);

  return (
    <>
      <Card link onClick={handleOpen}>
        <Card.Content>
          <Segment basic>
            <Image
              rounded
              size="mini"
              src={
                job.company_logo ? job.company_logo : 'https://picsum.photos/50'
              }
            />
          </Segment>
          <Card.Header>{job.title}</Card.Header>
          <Card.Meta>{job.company}</Card.Meta>
          <Card.Description>
            <strong>{job.location}</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>{moment(postDate).fromNow()}</Card.Content>
      </Card>

      <Modal
        dimmer="inverted"
        size="small"
        open={modalOpen}
        onClose={handleClose}
        centered={true}
      >
        <Card fluid>
          <Card.Content>
            <Image rounded floated="right" size="tiny" src={job.company_logo} />
            <Card.Header style={{ fontSize: '2em' }}>{job.title}</Card.Header>
            <Card.Meta>
              <span className="date">
                {job.company} - {job.location}
              </span>
            </Card.Meta>
            <Card.Description
              dangerouslySetInnerHTML={{ __html: job.description }}
            />
          </Card.Content>
          <Card.Content>
            <Card.Header>How to Apply</Card.Header>
            <Card.Description
              style={{ overflow: 'auto' }}
              dangerouslySetInnerHTML={{ __html: job.how_to_apply }}
            />
          </Card.Content>
        </Card>
      </Modal>
    </>
  );
}
