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
    const userName = "Michael";

    const showDeleteModal = (item) => {
        setSelectedItem(item);
        setIsModalVisible(true);
    };

    const handleCreateUpdates = () => {
        setIsDrawerVisible(true);
    };

    const handleDelete = (id) => {
        dispatch(deleteUpdates({ id: id }));
    };

    const handleMarkAllAsRead = () => {
        dispatch(clearAllUpdates());
    };

    const handleUpdateSubmit = (values) => {
        const newUpdate = {
            id: Date.now(),
            UpaterName: values.name,
            designation: "Dev",
            Update: values.update,
            Date: values.date,
            conformedBy: values.conformedBy,
        };
        dispatch(createUpdate(newUpdate));
    };

    const filteredData = updateData.filter((item) =>
        item.UpaterName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Update.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div style={{ padding: 24 }}>
                {/* Hero Section */}
                <Card
                    style={{
                        background: 'linear-gradient(135deg, #f0f4ff, #d9e4ff)',
                        border: 'none',
                        borderRadius: 12,
                        marginBottom: 24,
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        animation: 'fadeIn 1s ease-in-out',
                    }}
                >
                    <Title level={3} style={{ color: '#1a73e8', marginBottom: 8 }}>
                        Welcome Back, Michael
                    </Title>
                    <Text type="secondary" style={{ fontSize: 16 }}>
                        Here's what's happening with your updates today.
                    </Text>
                    <Row style={{ marginTop: 16 }}>
                        <Col>
                            <Button
                                type="primary"
                                icon={<PlusOutlined />}
                                onClick={handleCreateUpdates}
                                style={{
                                    background: '#1a73e8',
                                    border: 'none',
                                    borderRadius: 8,
                                    boxShadow: '0 2px 8px rgba(26, 115, 232, 0.3)',
                                    transition: 'all 0.3s',
                                }}
                                className="hover:scale-105"
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
                    {/* Toggle Buttons */}
                    <div className='flex items-center gap-2 mb-5'>
                        <Button
                            type="primary"
                            className='flex items-center justify-center px-6 py-2 bg-[#1a73e8] text-white rounded-full hover:bg-[#1557b0] transition-all duration-300 shadow-md hover:shadow-lg'
                        >
                            Important Update
                        </Button>
                        <Button
                            className='flex items-center justify-center px-6 py-2 bg-gray-100 text-[#1a73e8] rounded-full hover:bg-gray-200 transition-all duration-300 shadow-md hover:shadow-lg'
                        >
                            Past Update
                        </Button>
                    </div>

                    {/* Search Bar */}
                    <Row gutter={16} style={{ marginBottom: 24 }}>
                        <Col span={24}>
                            <Input
                                placeholder="Search Updates..."
                                prefix={<SearchOutlined style={{ color: '#bfbfbf', fontSize: '18px' }} />}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    borderRadius: 8,
                                    background: '#f0f2f5',
                                    border: 'none',
                                    height: '48px',
                                    fontSize: '16px',
                                    padding: '12px 16px',
                                }}
                            />
                        </Col>
                    </Row>

                    {/* Notification List */}
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
                                className="hover:shadow-lg"
                                actions={[
                                    <Button
                                        key={1}
                                        type="text"
                                        icon={<CheckCircleOutlined style={{ color: '#1a73e8' }} />}
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
                                            <BellOutlined style={{ fontSize: 20, color: '#1a73e8' }} />
                                        </div>
                                    }
                                    title={
                                        <Text style={{ fontWeight: 500 }}>
                                            {item.UpaterName} ({item.designation}) - {item.Date}
                                        </Text>
                                    }
                                    description={<Text type="secondary">{item.Update} <span className='text-black text-xs font-medium'>Conformed By: {item.conformedBy}</span></Text>}
                                />
                            </List.Item>
                        )}
                    />

                    {/* Quick Actions */}
                    <Row justify="end" style={{ marginTop: 24 }}>
                        <Col>
                            <Button
                                icon={<CheckCircleOutlined />}
                                onClick={handleMarkAllAsRead}
                                style={{
                                    background: '#e6f7ff',
                                    color: '#1a73e8',
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

            {/* Modals and Drawers */}
            {isModalVisible && (
                <DeleteModal
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                    selectedItem={selectedItem}
                    handleDelete={handleDelete}
                />
            )}
            {isDrawerVisible && (
                <CreateUpdateDrawer
                    visible={isDrawerVisible}
                    onClose={() => setIsDrawerVisible(false)}
                    onSubmit={handleUpdateSubmit}
                    userName={userName}
                />
            )}
        </>
    );
};

export default Dashboard;