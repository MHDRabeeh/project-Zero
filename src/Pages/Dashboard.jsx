// import { useNavigate } from 'react-router';
import { BellOutlined, CheckCircleOutlined, DeleteOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Input, Card, List, Typography, Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUpdates, createUpdate, clearAllUpdates } from '../features/impUpdateSlice';
import { useState } from 'react';
import DeleteModal from '../components/modal/DeleteModal';
import CreateUpdateDrawer from '../components/Drawer/CreateUpdateDrawer';

const { Title, Text } = Typography;

const Dashboard = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    let updateData = useSelector((state) => state.impUpdates);
    const dispatch = useDispatch();
    const userName = "Michael"



    const showDeleteModal = (item) => {
        setSelectedItem(item);
        setIsModalVisible(true);
    };

    const handleCteateUpdates = () => {
        setIsDrawerVisible(true)
    }

    const handleDelete = (id) => {
        dispatch(deleteUpdates({ id: id }))
    }

    const handleMarkAllAsRead = () => {
        dispatch(clearAllUpdates())
        // Dispatch an action to mark all updates as read
    };

    function handleUpdateSubmit(values) {
        console.log(values);
        
        const newUpdate = {
            id: Date.now(), // Generate a unique ID
            UpaterName: values.name, // Automatically included user name
            designation: "Dev", // User's designation
            Update: values.update, // Update content
            Date: values.date, // Automatically included current date
            conformedBy:values.conformedBy
        };

        dispatch(createUpdate(newUpdate))


    }




    const filteredData = updateData.filter((item) =>
        item.UpaterName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Update.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    console.log(isDrawerVisible);

    return (
        <>
            <div style={{ padding: 24 }}>
                {/* Hero Section */}
                <Card
                    style={{
                        background: 'linear-gradient(135deg, #e6f7ff, #bae7ff)',
                        border: 'none',
                        borderRadius: 12,
                        marginBottom: 24,
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Title level={3} style={{ color: '#0050b3', marginBottom: 8 }}>
                        Welcome Back, User!
                    </Title>
                    <Text type="secondary" style={{ fontSize: 16 }}>
                        {"Here's what's happening with your updates today."}
                    </Text>
                    <Row style={{ marginTop: 16 }}>
                        <Col>
                            <Button
                                type="primary"
                                icon={<PlusOutlined />}
                                onClick={handleCteateUpdates}
                                style={{
                                    background: '#52c41a',
                                    border: 'none',
                                    borderRadius: 8,
                                    boxShadow: '0 2px 8px rgba(82, 196, 26, 0.3)',
                                }}
                            >
                                Create New Update
                            </Button>
                        </Col>
                    </Row>
                </Card>

                {/* Notification Section */}
                <Card
                    style={{
                        border: 'none',
                        borderRadius: 12,
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    }}
                >

                    <div className='flex justify-between'>
                        <Title level={4} style={{ color: '#0050b3', marginBottom: 24 }}>
                            Important Updates
                        </Title>

                        <div>asfsadf</div>

                    </div>


                    {/* Search Bar */}
                    <Row gutter={16} style={{ marginBottom: 24 }}>
                        <Col span={24}>
                            <Input
                                placeholder="Search Updates..."
                                prefix={<SearchOutlined style={{ color: '#bfbfbf' }} />}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    borderRadius: 8,
                                    background: '#f0f2f5',
                                    border: 'none',
                                }}
                            />
                        </Col>
                    </Row>

                    {/* Notification List */}
                    <div className=' '>
                        <List
                            itemLayout="horizontal"
                            dataSource={filteredData}
                            renderItem={(item) => (
                                <List.Item
                                    key={item.id}
                                    style={{
                                        padding: 16,
                                        marginBottom: 8,
                                        borderRadius: 8,
                                        background: '#fff',
                                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                                        transition: 'all 0.3s',
                                        cursor: 'pointer',
                                    }}
                                    actions={[
                                        <Button
                                            key={1}
                                            type="text"
                                            icon={<CheckCircleOutlined style={{ color: '#13c2c2' }} />}
                                            onClick={() => handleDelete(item.id)}
                                        />,
                                        <Button
                                            type="text"
                                            key={2}
                                            icon={<DeleteOutlined style={{ color: '#ff4d4f' }} />}
                                            onClick={() => showDeleteModal(item)}
                                        />,
                                    ]}
                                >
                                    <List.Item.Meta
                                        avatar={
                                            <div
                                                style={{
                                                    background: '#e6f7ff',
                                                    padding: 12,
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <BellOutlined style={{ fontSize: 20, color: '#13c2c2' }} />
                                            </div>
                                        }
                                        title={
                                            <Text style={{ fontWeight: 500 }}>
                                                {item.UpaterName} ({item.designation}) - {item.Date}
                                            </Text>
                                        }
                                        description={<Text type="secondary">{item.Update} <span className='text-black text-xs font-medium'> {"Conformed By"} : {item.conformedBy}</span></Text>}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>

                    {/* Quick Actions */}
                    <Row justify="end" style={{ marginTop: 24 }}>
                        <Col>
                            <Button
                                icon={<CheckCircleOutlined />}
                                onClick={handleMarkAllAsRead}
                                style={{
                                    background: '#e6f7ff',
                                    color: '#13c2c2',
                                    border: 'none',
                                    borderRadius: 8,
                                }}
                            >
                                Mark All as Read
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </div>
            {isModalVisible && <DeleteModal
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                selectedItem={selectedItem}
                handleDelete={handleDelete}
            />}
            {isDrawerVisible && <CreateUpdateDrawer
                visible={isDrawerVisible}
                onClose={setIsDrawerVisible}
                onSubmit={handleUpdateSubmit}
                userName={userName}

            />}
        </>
    );
};

export default Dashboard;