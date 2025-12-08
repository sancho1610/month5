import { Card, Badge, Tag } from 'antd';
import { Button } from 'antd';

export const Block = ({ user }) => {
  const { name = 'Unknown', age = '-', city = '-', active = false, img } = user || {};

  return (
    <Card
      className="user-card"
      cover={img && <img alt={name} src={img} className="card-image" />}
      hoverable
    >
      <div className="card-content">
        <h2 className="user-name">{name}</h2>

        <div className="user-info">
          <p><strong>Age:</strong> {age}</p>
          <p><strong>City:</strong> {city}</p>
        </div>

        {active && (
          <div className="active-badge">
            <Badge status="success" text="Active" />
            <Tag color="green">Online</Tag>
          </div>
        )}
      </div>
    </Card>
  );
};