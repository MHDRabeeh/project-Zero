import { useState } from 'react';
import { Avatar, Form, Button, List, Input, Upload, message, Image } from 'antd';
import { useLocation } from 'react-router-dom';
import { PlusOutlined, SendOutlined } from '@ant-design/icons';
import CustomComment from '../components/CustomComment';
import TableComponent from '../components/Table';
import './CommentSection.css'; // Import custom CSS

const { TextArea } = Input;

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const CommentSection = () => {
    const location = useLocation();
    const [comments, setComments] = useState([]);
    const [value, setValue] = useState('');
    const [fileList, setFileList] = useState([]);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');

    const handleSubmit = () => {
        if (!value) {
            message.warning('Please enter a comment!');
            return;
        }
    
        const newComment = {
            id: Date.now(), // Add a unique ID for each comment
            author: 'Micheal Johne', // Replace with actual user name
            content: value,
            datetime: new Date().toLocaleString(), // Add proper date and time
            file: fileList.map((file) => ({
                url: file.url || file.thumbUrl, // Ensure high-resolution URL is used
                thumbUrl: file.thumbUrl, // Optional: Keep thumbnail URL for smaller previews
            })),
        };
    
        setComments([...comments, newComment]);
        setValue('');
        setFileList([]);
    };

    const handleFileChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };

    const handleEditComment = (id, newContent) => {
        const updatedComments = comments.map(comment =>
            comment.id === id ? { ...comment, content: newContent } : comment
        );
        setComments(updatedComments);
    };

    const handleDeleteComment = (id) => {
        const updatedComments = comments.filter(comment => comment.id !== id);
        setComments(updatedComments);
    };

    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
        >
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </button>
    );

    return (
        <div className="comment-section-container">
            {location?.state && <TableComponent data={location?.state} />}
            {!location.state.slaPage && (
                <div className="comment-input-container">
                    <Avatar className="comment-avatar">MJ</Avatar>
                    <div className="comment-input-wrapper">
                        <Form.Item className='!mb-2'>
                            <div className="comment-textarea-container">
                                <TextArea
                                    rules={[{ required: true, message: 'comment area is required' }]}
                                    rows={4}
                                    onChange={(e) => setValue(e.target.value)}
                                    value={value}
                                    placeholder="Write a comment..."
                                    autoSize={{ minRows: 3, maxRows: 6 }}
                                    className="comment-textarea"
                                />
                                <Button
                                    type="primary"
                                    icon={<SendOutlined />}
                                    onClick={handleSubmit}
                                    className="comment-submit-button"
                                >
                                    Post
                                </Button>
                            </div>
                        </Form.Item>
                        <Form.Item className='!m-0'>
                            <Upload
                                className='!mb-0'
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleFileChange}
                                beforeUpload={() => false} // Prevent automatic upload
                                multiple
                                maxCount={4}
                            >
                                {fileList.length >= 4 ? null : uploadButton}
                            </Upload>
                        </Form.Item>
                    </div>
                </div>
            )}

            <div className="comment-list-container ml-9 ">
                <List 
                    dataSource={comments}
                    header={`${comments.length} ${comments.length > 1 ? 'comments' : 'comment'}`}
                    itemLayout="horizontal"
                    renderItem={(item) => (
                        <CustomComment
                            {...item}
                            onEdit={(newContent) => handleEditComment(item.id, newContent)}
                            onDelete={() => handleDeleteComment(item.id)}
                        />
                    )}
                />
            </div>

            {previewImage && (
                <Image
                    wrapperStyle={{
                        display: 'none',
                    }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                />
            )}
        </div>
    );
};

export default CommentSection;