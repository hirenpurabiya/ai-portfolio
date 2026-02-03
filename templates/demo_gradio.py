"""
Gradio Demo Template
====================
Use this as a starting point for creating interactive ML demos.
Deploy to Hugging Face Spaces for free hosting.

To run locally:
    pip install gradio
    python demo_gradio.py
"""

import gradio as gr

# ============================================
# YOUR MODEL/LOGIC HERE
# ============================================

def process_input(user_input: str) -> str:
    """
    Main processing function.
    
    Args:
        user_input: The text/data from the user
        
    Returns:
        The processed result to display
    """
    # TODO: Replace with your actual model/logic
    result = f"Processed: {user_input}"
    return result


# ============================================
# GRADIO INTERFACE
# ============================================

# Simple interface
demo = gr.Interface(
    fn=process_input,
    inputs=gr.Textbox(
        label="Input",
        placeholder="Enter your text here...",
        lines=3
    ),
    outputs=gr.Textbox(label="Output"),
    title="Project Name",
    description="One-line description of what this does.",
    examples=[
        ["Example input 1"],
        ["Example input 2"],
    ],
    theme=gr.themes.Soft()
)

# For more complex UIs, use gr.Blocks():
# 
# with gr.Blocks(theme=gr.themes.Soft()) as demo:
#     gr.Markdown("# Project Name")
#     
#     with gr.Row():
#         with gr.Column():
#             input_text = gr.Textbox(label="Input")
#             submit_btn = gr.Button("Submit", variant="primary")
#         with gr.Column():
#             output_text = gr.Textbox(label="Output")
#     
#     submit_btn.click(fn=process_input, inputs=input_text, outputs=output_text)


if __name__ == "__main__":
    demo.launch()
