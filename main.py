# from fastapi import FastAPI, Request, Form
# from fastapi.responses import HTMLResponse
# from fastapi.templating import Jinja2Templates
# from fastapi.staticfiles import StaticFiles
# from transformers import AutoTokenizer, AutoModelForCausalLM

# # Initialize FastAPI app
# app = FastAPI()

# # Load the GPT-Neo model and tokenizer
# model_name = "EleutherAI/gpt-neo-1.3B"  # Replace with "EleutherAI/gpt-j-6B" for a larger model
# tokenizer = AutoTokenizer.from_pretrained(model_name)
# model = AutoModelForCausalLM.from_pretrained(model_name)

# # Set up Jinja2 templates
# templates = Jinja2Templates(directory="public")
# app.mount("/learn", StaticFiles(directory="learn"), name="learn")

# # Root endpoint with a form to accept text input
# @app.get("/", response_class=HTMLResponse)
# async def read_root(request: Request):
#     """
#     Render the main page with a text input form.
#     """
#     return templates.TemplateResponse("learn.html", {"request": request})

# # Text generation endpoint
# @app.post("/generate", response_class=HTMLResponse)
# async def generate_text(request: Request, prompt: str = Form(...), max_length: int = Form(100), temperature: float = Form(0.7), top_p: float = Form(0.9)):
#     """
#     Generate text using GPT-Neo and display it on an HTML page.
#     """
#     try:
#         # Tokenize the input prompt
#         input_ids = tokenizer(prompt, return_tensors="pt").input_ids

#         # Generate text
#         output = model.generate(
#             input_ids,
#             max_length=max_length,
#             temperature=temperature,
#             top_p=top_p,
#             do_sample=True,
#         )

#         # Decode the generated text
#         generated_text = tokenizer.decode(output[0], skip_special_tokens=True)

#         return templates.TemplateResponse(
#             "result.html",
#             {"request": request, "prompt": prompt, "generated_text": generated_text},
#         )
#     except Exception as e:
#         return templates.TemplateResponse(
#             "error.html",
#             {"request": request, "error_message": str(e)},
#         )
from flask import Flask, request, jsonify
from transformers import AutoTokenizer, AutoModelForCausalLM

app = Flask(__name__)

# Load the GPT-Neo model and tokenizer
model_name = "EleutherAI/gpt-neo-1.3B"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

@app.route('/generate', methods=['POST'])
def generate_text():
    data = request.get_json()
    prompt = data.get("prompt", "")
    
    if not prompt:
        return jsonify({"error": "Prompt is required"}), 400

    try:
        input_ids = tokenizer(prompt, return_tensors="pt").input_ids
        output = model.generate(
            input_ids,
            max_length=100,
            temperature=0.7,
            top_p=0.9,
            do_sample=True,
        )
        generated_text = tokenizer.decode(output[0], skip_special_tokens=True)
        return jsonify({"generated_text": generated_text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
 